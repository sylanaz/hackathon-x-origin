import React from 'react';
import FitnessInfo from './FitnessInfo';
import WeekyStat from './WeekStat';

const FitnessData = ({
  date,
  steps,
  bpm,
  zone,
  goal,
  weeklyStats,
}) => {
  return (
    <div className="fitness-data">
      <h2>{date}</h2>
      <FitnessInfo
        steps={steps}
        bpm={bpm}
        zone={zone}
        goal={goal}
      />
      <WeekyStat weeklyStats={weeklyStats} />
    </div>
  );
};

export default FitnessData;