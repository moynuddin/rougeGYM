import React from "react";
import "../components/IndividualExercise.scss";
import ActualExercise from "../components/ActualExercise";
import dumbbell from "../assets/images/dumbbell.png";
const IndividualExercise = ({ exerciseData }) => {
  return (
    <>
      <div className="details">
        <img src={exerciseData?.gifUrl} alt={exerciseData?.name} />
        <div className="exercise-info">
          <h1>{exerciseData.name}</h1>
          <div className="grid">
            <img className="icons" src={dumbbell} alt="icon" />
            <img className="icons" src={dumbbell} alt="icon" />
            <img className="icons" src={dumbbell} alt="icon" />

            <p>{exerciseData.bodyPart}</p>
            <p>{exerciseData.target}</p>
            <p>{exerciseData.equipment}</p>
          </div>
        </div>
      </div>
      <ActualExercise name={exerciseData.name} />
    </>
  );
};

export default IndividualExercise;
