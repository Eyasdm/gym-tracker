import { useEffect, useState } from "react";

//  send the information to the workout form. ✅
export function AddWorkoutBtn({ onIsPopupOpen }) {
  return (
    <div className="add-workout-btn__container">
      <button
        onClick={() => onIsPopupOpen(true)}
        href="#popup"
        className="add-workout-btn"
      >
        +
      </button>
    </div>
  );
}
export function Popup({ onAddWorkout, onClose, currentDay }) {
  const [newWorkout, setNewWorkout] = useState({
    name: "",
    part: "",
    sets: 3,
    reps: 8,
    weight: 0,
    day: currentDay,
  });

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 10);
    return () => clearTimeout(timer);
  }, []);

  function onSubmit() {
    if (!newWorkout.name.trim() || !newWorkout.part || newWorkout.weight <= 0) {
      alert(
        "Please fill in all required fields (Exercise name, Muscle, Weight)."
      );
      return;
    }
    onAddWorkout(newWorkout);
    onClose();
  }

  function handleClose() {
    const popup = document.querySelector(".popup");
    popup.classList.add("closing");

    setTimeout(() => {
      onClose();
      popup.classList.remove("closing");
    }, 350);
  }

  return (
    <div
      className={`popup ${isActive ? "popup--active" : ""}`}
      onClick={(e) => {
        if (e.target.classList.contains("popup")) onClose();
      }}
    >
      <div className="popup__content">
        {/* close button */}
        <a className="popup__close" onClick={handleClose}>
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
          placeholder="Exercise Name"
          className="popup__input input"
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, name: e.target.value })
          }
        />

        <select
          className="popup__select"
          onChange={(e) =>
            setNewWorkout({ ...newWorkout, part: e.target.value })
          }
        >
          <option value="">Select Muscle</option>
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
        <button type="button" className="popup__btn" onClick={() => onSubmit()}>
          Add
        </button>
      </div>
    </div>
  );
}
