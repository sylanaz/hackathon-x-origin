import React from "react";
// import './FitnessInfo.css';

const FitnessInfo = ({ steps, bpm, zone, goal }) => {
  return (
    <div className="fitness-info">
      <div className="fitness-info-row">
        <span>Steps today:</span>
        <span>
          {steps} / {goal} steps
        </span>
      </div>
      <div className="fitness-info-row">
        <span>Heart rate:</span>
        <span>{bpm} BPM</span>
        <span> </span>
        <span>{zone}</span>
      </div>
    </div>
  );
};

export default FitnessInfo;
