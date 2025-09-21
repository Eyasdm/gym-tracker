import { DayTabs } from "./components/DayTabs";
import Header from "./components/Header";
import { AddWorkoutBtn, Popup } from "./components/Popup";
import { SummaryCards } from "./components/SummaryCards";
import { WorkoutFilters } from "./components/WorkoutFilters";
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
