import { DayTabs } from "./components/DayTabs";
import Header from "./components/Header";
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
    </div>
  );
}
