// connect the total to the total of workout for the day
// connect the completed to the workouts that has the done tag in them.
// calculate the total voulme for the day.

export function SummaryCards({ filtered }) {
  const completedWorkouts = filtered.filter((w) => w.done).length;
  const volume = filtered.reduce(
    (acc, w) => acc + w.sets * w.reps * w.weight,
    0
  );

  return (
    <section className="summary-cards grid--3--cols margin">
      <div className="summary-cards__item summary-cards__item--total">
        <div className="summary-cards__name">Total</div>
        <div className="summary-cards__num">{filtered.length}</div>
      </div>

      <div className="summary-cards__item summary-cards__item--completed">
        <div className="summary-cards__name">Completed</div>
        <div className="summary-cards__num"> {completedWorkouts} </div>
      </div>

      <div className="summary-cards__item summary-cards__item--volume">
        <div className="summary-cards__name">Volume</div>
        <div className="summary-cards__num">
          {volume.toLocaleString("de-DE")} kg
        </div>
      </div>
    </section>
  );
}
