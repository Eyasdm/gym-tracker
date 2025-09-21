// connect the total to the total of workout for the day
// connect the completed to the workouts that has the done tag in them.
// calculate the total voulme for the day.


export function SummaryCards() {
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
