import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export function DayTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const today = days[new Date().getDay() - 1];
      navigate(`/${today.toLowerCase()}`, { replace: true });
    }
  }, [location.pathname, navigate]);

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
