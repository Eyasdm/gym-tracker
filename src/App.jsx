import Header from "./components/Header";
import WorkoutForm from "./components/WorkoutForm";

import "./styles/main.scss";

export default function App() {
  return (
    <div className="app container">
      <Header />
      <DayTabs />
      <SummaryCards />
      <WorkoutFilters />
      <WorkoutForm />
      <AddWorkoutBtn />
      <Popup />
    </div>
  );
}

function DayTabs() {
  return (
    <nav className="day-tabs margin ">
      <div className="day-tabs__day day-tabs--day-active">Mon</div>
      <div className="day-tabs__day">Tue</div>
      <div className="day-tabs__day">Wed</div>
      <div className="day-tabs__day">Thu</div>
      <div className="day-tabs__day">Fri</div>
      <div className="day-tabs__day">Sat</div>
      <div className="day-tabs__day">Sun</div>
    </nav>
  );
}

function SummaryCards() {
  return (
    <section className="summary-cards grid--3--cols margin">
      <div className="summary-cards__item summary-cards__item--total">
        <div className="summary-cards__name">Total</div>
        <div className="summary-cards__num">3</div>
      </div>

      <div className="summary-cards__item summary-cards__item--completed">
        <div className="summary-cards__name">Completed</div>
        <div className="summary-cards__num">1</div>
      </div>

      <div className="summary-cards__item summary-cards__item--volume">
        <div className="summary-cards__name">Volume</div>
        <div className="summary-cards__num">3.200 kg</div>
      </div>
    </section>
  );
}

function WorkoutFilters() {
  return (
    <section className="workout-filters grid--2--cols margin">
      <div className="workout-filters__item">
        <div className="workout-filters__name">Muscle</div>
        <select id="muscle" className="workout-filters__select">
          <option value="all">All</option>
          <option value="chest">Chest</option>
          <option value="back">Back</option>
          <option value="legs">Legs</option>
          <option value="arms">Arms</option>
          <option value="shoulders">Shoulders</option>
        </select>
      </div>
      <div className="workout-filters__item">
        <label className="workout-filters__name" htmlFor="status">
          Status
        </label>
        <select id="status" className="workout-filters__select">
          <option value="not-done">Not done</option>
          <option value="done">Done</option>
          <option value="all">All</option>
        </select>
      </div>
    </section>
  );
}

function AddWorkoutBtn() {
  return (
    <div className="add-workout-btn__container">
      <a href="#popup" className="add-workout-btn">
        +
      </a>
    </div>
  );
}
function Popup() {
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
        />

        <select id="muscle" className="popup__select">
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
            />
          </div>
          <div className="popup__sets-field">
            <span className="popup__sets-label">Reps</span>
            <input
              type="number"
              className="popup__sets-input"
              defaultValue={8}
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
            />
            <span className="popup__weight-unit">kg</span>
          </div>
        </div>

        {/* Add button */}
        <button className="popup__btn">Add</button>
      </div>
    </div>
  );
}
