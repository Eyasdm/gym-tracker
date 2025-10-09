// recieve the workout from the popup and create a new workout form for the added workout. ✅
// tag the workout to done when done button clicked ✅
// delete the workout when the delete btn get clicked ✅
import { FaTrash } from "react-icons/fa";
import { AddWorkoutBtn, Popup } from "./Popup";
import { useState } from "react";

export default function WorkoutForm({
  onToggleDone,
  onToggleDelete,
  onAddNewWorkout,
  filtered,
  currentDay,
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const sortedWorkouts = [...filtered].sort((a, b) => {
    if (a.done === b.done) return a.order - b.order;
    return a.done - b.done;
  });

  return (
    <>
      {(!filtered || filtered.length === 0) && (
        <div className="workout-form__empty">
          <p className="workout-form__empty-text">
            No workouts added for this day 💪
            <span>Add one using the “+” button below.</span>
          </p>
        </div>
      )}

      {filtered && filtered.length > 0 && (
        <div className="form">
          {sortedWorkouts.map((w) => (
            <WorkoutItem
              key={w.id}
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
      )}

      <AddWorkoutBtn onIsPopupOpen={setIsPopupOpen} />

      {isPopupOpen && (
        <Popup
          currentDay={currentDay}
          onAddWorkout={(workout) => {
            onAddNewWorkout(workout);
            setIsPopupOpen(false);
          }}
          onClose={() => setIsPopupOpen(false)}
        />
      )}
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
    <div className={`item margin grid--2--cols `}>
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
          onClick={onToggleDelete}
        >
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
