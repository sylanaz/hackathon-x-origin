import React from 'react';


const WeekStat = ({ weeklyStats }) => {
  return (
    <div className="weekly-statistics">
      <span>Weekly statistics:</span>
      <span>{weeklyStats}</span>
    </div>
  );
};

export default WeekStat;