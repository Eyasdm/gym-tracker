// recieve the workout from the popup and create a new workout form for the added workout. ✅
// tag the workout to done when done button clicked ✅
// delete the workout when the delete btn get clicked ✅

import { FaTrash } from "react-icons/fa";
import { AddWorkoutBtn, Popup } from "./Popup";

export default function WorkoutForm({
  onToggleDone,
  onToggleDelete,
  onAddNewWorkout,
  filtered,
}) {
  const sortedWorkouts = [...filtered].sort((a, b) => {
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
            onToggleDone={onToggleDone}
            onToggleDelete={onToggleDelete}
            done={w.done}
          />
        ))}
      </div>
      <AddWorkoutBtn />
      <Popup onAddWorkout={onAddNewWorkout} />
    </>
  );
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
