// each day should have it own tabs and detail connected to it:
//  create a seperate page for every day
//  the stats should be changed when going from day to another

export function DayTabs() {
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
