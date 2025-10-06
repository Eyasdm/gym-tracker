import { NavLink } from "react-router-dom";

export function DayTabs() {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  return (
    <nav className="day-tabs margin">
      {days.map((day) => (
        <NavLink
          key={day}
          to={`/${day}`}
          className={({ isActive }) =>
            isActive ? "day-tabs__day day-tabs__day--active" : "day-tabs__day"
          }
        >
          {day.slice(0, 3)}
        </NavLink>
      ))}
    </nav>
  );
}
