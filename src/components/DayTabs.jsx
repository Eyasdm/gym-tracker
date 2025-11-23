import { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const days = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
];

export function DayTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      const todayIndex = new Date().getDay(); // Sunday = 0
      const today = days[todayIndex === 0 ? 6 : todayIndex - 1];
      navigate(`/${today}`, { replace: true });
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
          {day.slice(0, 3).toUpperCase()}
        </NavLink>
      ))}
    </nav>
  );
}
