export function WorkoutFilters() {
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
