import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useMemo, useState } from "react";
import { DayTabs } from "./components/DayTabs";
import Header from "./components/Header";
import { SummaryCards } from "./components/SummaryCards";
import { WorkoutFilters } from "./components/WorkoutFilters";
import WorkoutForm from "./components/WorkoutForm";
import "./styles/main.scss";

const starterWorkout = [
  {
    id: 1,
    name: "Bench Press",
    part: "Chest",
    sets: 3,
    reps: 10,
    weight: 100,
    done: false,
    order: 0,
    day: "monday",
  },
  {
    id: 2,
    name: "Lat Pulldown",
    part: "Back",
    sets: 3,
    reps: 12,
    weight: 70,
    done: true,
    order: 1,
    day: "tuesday",
  },
  {
    id: 3,
    name: "Squat",
    part: "Legs",
    sets: 4,
    reps: 8,
    weight: 120,
    done: false,
    order: 0,
    day: "friday",
  },
];

function AppContent() {
  const [workouts, setWorkouts] = useState(starterWorkout);
  const [selectedMuscle, setSelectedMuscle] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const location = useLocation();
  const currentDay = (
    location.pathname.split("/")[1] || "monday"
  ).toLowerCase();

  console.log(currentDay);
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

  console.log(filtered);
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
