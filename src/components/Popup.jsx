import { useState } from "react";

//  send the information to the workout form. ✅
export function AddWorkoutBtn() {
  return (
    <div className="add-workout-btn__container">
      <a href="#popup" className="add-workout-btn">
        +
      </a>
    </div>
  );
}
export function Popup({ onAddWorkout }) {
  const [newWorkout, setNewWorkout] = useState({ sets: 3, reps: 8, weight: 0 });

  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        {/* close link */}
        <a href="#" className="popup__close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="popup__close--btn"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </a>

        <h2 className="popup__title">Add Workout</h2>

        <input
          type="text"
          className="popup__input input"
          placeholder="Exercise Name"
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, name: e.target.value })
          }
        />

        <select
          id="muscle"
          className="popup__select"
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, part: e.target.value })
          }
        >
          <option value="all">Muscle</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="arms">Arms</option>
          <option value="shoulders">Shoulders</option>
        </select>

        {/* Sets + Reps */}
        <div className="popup__sets">
          <div className="popup__sets-field">
            <span className="popup__sets-label">Sets</span>
            <input
              type="number"
              className="popup__sets-input"
              defaultValue={3}
              onChange={(e) =>
                setNewWorkout({ ...newWorkout, sets: e.target.value })
              }
            />
          </div>
          <div className="popup__sets-field">
            <span className="popup__sets-label">Reps</span>
            <input
              type="number"
              className="popup__sets-input"
              defaultValue={8}
              onChange={(e) =>
                setNewWorkout({ ...newWorkout, reps: e.target.value })
              }
            />
          </div>
        </div>

        {/* Weight */}
        <div className="popup__weight">
          <span className="popup__weight-label">Weight</span>
          <div className="popup__weight-control">
            <input
              type="number"
              className="popup__weight-input"
              placeholder="0"
              onChange={(e) =>
                setNewWorkout({ ...newWorkout, weight: e.target.value })
              }
            />
            <span className="popup__weight-unit">kg</span>
          </div>
        </div>

        {/* Add button */}
        <a
          href="#"
          className="popup__btn"
          onClick={() => onAddWorkout(newWorkout)}
        >
          Add
        </a>
      </div>
    </div>
  );
}
