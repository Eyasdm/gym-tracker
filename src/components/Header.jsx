import { FaDumbbell } from "react-icons/fa";

export default function Header() {
  return (
    <header className="header margin">
      <FaDumbbell className="header__icon" />
      <h1 className="header__title">Gym Workout Tracker</h1>
    </header>
  );
}
