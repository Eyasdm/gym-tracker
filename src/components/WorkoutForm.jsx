// recieve the workout from the popup and create a new workout form for the added workout.
// tag the workout to done when done button clicked
// delete the workout when the delete btn get clicked

import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { AddWorkoutBtn, Popup } from "./Popup";

let starterWorkout = [
  {
    id: 1,
    name: "Bench Press",
    part: "Chest",
    sets: 3,
    reps: 10,
    weight: 100,
    done: false,
    order: 0,
  },
  {
    id: 2,
    name: "Lat Pulldown",
    part: "Back",
    sets: 3,
    reps: 12,
    weight: 70,
    done: true,
    order: 1,
  },
  {
    id: 3,
    name: "Squat",
    part: "Legs",
    sets: 4,
    reps: 8,
    weight: 120,
    done: false,
    order: 2,
  },
];

export default function WorkoutForm() {
  const [workouts, setWorkouts] = useState(starterWorkout);

  const sortedWorkouts = [...workouts].sort((a, b) => {
    if (a.done === b.done) {
      return a.order - b.order;
    }
    return a.done - b.done;
  });

  return (
    <>
      <div className="form">
        {sortedWorkouts.map((w) => (
          <WorkoutItem
            key={w.order}
            name={w.name}
            part={w.part}
            sets={`${w.sets} sets x ${w.reps} reps @ ${w.weight}kg`}
            id={w.id}
            onToggleDone={toggleDone}
            onToggleDelete={deleteWorkout}
            done={w.done}
          />
        ))}
      </div>
      <AddWorkoutBtn />
      <Popup onAddWorkout={addNewWorkout} />
    </>
  );

  function toggleDone(id) {
    setWorkouts(
      workouts.map((w) =>
        w.id === id ? (w.id === id ? { ...w, done: !w.done } : w) : w
      )
    );
  }

  function deleteWorkout(id) {
    setWorkouts(workouts.filter((w) => w.id !== id));
  }
  function addNewWorkout(newWorkout) {
    console.log(newWorkout);
    newWorkout.id = Date.now();
    newWorkout.order = workouts.length;
    newWorkout.done = false;
    setWorkouts([...workouts, newWorkout]);
  }
}
function WorkoutItem({
  name,
  part,
  sets,
  id,
  onToggleDone,
  done,
  onToggleDelete,
}) {
  return (
    <div className="item margin grid--2--cols">
      <div className="item__text">
        <p className="item__text--type">{name}</p>
        <p className="item__text--part">{part}</p>
        <p>{sets}</p>
      </div>
      <div className="item__buttons">
        <button
          className={`item__buttons--done-btn ${!done ? "done" : "undo"}`}
          onClick={() => onToggleDone(id)}
        >
          {done ? "Undo" : "Done"}
        </button>
        <button
          className="item__buttons--delete-btn"
          aria-label="Delete"
          onClick={() => onToggleDelete(id)}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
