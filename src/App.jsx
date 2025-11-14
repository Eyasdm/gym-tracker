import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { DayTabs } from "./components/DayTabs";
import Header from "./components/Header";
import { SummaryCards } from "./components/SummaryCards";
import { WorkoutFilters } from "./components/WorkoutFilters";
import WorkoutForm from "./components/WorkoutForm";
import "./styles/main.scss";
import { useLocaleStorageState } from "./components/useLocalStorageState";
import { starterWorkout } from "../src/data/starterworkouts";

function AppContent() {
  const [workouts, setWorkouts] = useLocaleStorageState(
    starterWorkout,
    "workout"
  );
  const [selectedMuscle, setSelectedMuscle] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const location = useLocation();
  const currentDay = (
    location.pathname.split("/")[1] || "monday"
  ).toLowerCase();

  const filtered = useMemo(() => {
    return workouts.filter((w) => {
      const muscleOk =
        selectedMuscle === "all" || w.part.toLowerCase() === selectedMuscle;
      const statusOk =
        selectedStatus === "all" ||
        (selectedStatus === "done" ? w.done : !w.done);
      const dayOk = currentDay === "" || w.day.toLowerCase() === currentDay;

      // if (!dayOk)
      //   console.log("Skipped:", w.day, "because currentDay =", currentDay);

      return muscleOk && statusOk && dayOk;
    });
  }, [workouts, selectedMuscle, selectedStatus, currentDay]);

  function toggleDone(id) {
    setWorkouts((prev) =>
      prev.map((w) => (w.id === id ? { ...w, done: !w.done } : w))
    );
  }

  function deleteWorkout(id) {
    setWorkouts((prev) => prev.filter((w) => w.id !== id));
  }

  function addNewWorkout(newWorkout) {
    setWorkouts((prev) => [
      ...prev,
      { ...newWorkout, id: Date.now(), order: prev.length, done: false },
    ]);
  }

  return (
    <div className="app container">
      <Header />
      <DayTabs />
      <SummaryCards filtered={filtered} />
      <WorkoutFilters
        selectedMuscle={selectedMuscle}
        selectedStatus={selectedStatus}
        setSelectedMuscle={setSelectedMuscle}
        setSelectedStatus={setSelectedStatus}
      />
      <WorkoutForm
        onToggleDone={toggleDone}
        onToggleDelete={deleteWorkout}
        onAddNewWorkout={addNewWorkout}
        workouts={workouts}
        filtered={filtered}
        currentDay={currentDay}
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
