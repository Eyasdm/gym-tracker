import { FaTrash } from "react-icons/fa";

export default function WorkoutForm() {
  return (
    <div className="form">
      <WorkoutItem
        name={"Bench Press"}
        part={"Chest"}
        sets={"3 sets x 12 reps @ 70kg"}
      />
      <WorkoutItem
        name={"Back Squat"}
        part={"Legs"}
        sets={"4 sets x 8 reps @ 90kg"}
      />
      <WorkoutItem
        name={"Pull-ups"}
        part={"Back"}
        sets={"3 sets x 10 reps @ BW"}
      />
    </div>
  );
}

function WorkoutItem({ name, part, sets }) {
  return (
    <div className="item margin grid--2--cols">
      <div className="item__text">
        <p className="item__text--type">{name}</p>
        <p className="item__text--part">{part}</p>
        <p>{sets}</p>
      </div>
      <div className="item__buttons">
        <button className="item__buttons--done-btn">Done</button>
        <button className="item__buttons--delete-btn" aria-label="Delete">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
