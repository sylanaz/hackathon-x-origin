import React from "react";

export const CircularProgressBar = ({ percentages, circleWidth }) => {
  const rad = 85;
  const dashArray = rad * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentages) / 100;
  return (
    <div className="md:mt-10 bg-[#1F2544] rounded-full">
      <svg
        width={circleWidth}
        height={circleWidth}
        viewBox={`0 0 ${circleWidth} ${circleWidth}`}
      >
        {/* <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={rad}
          className=" fill-none stroke-[#ddd]"
        /> */}
        <circle
          cx={circleWidth / 2}
          cy={circleWidth / 2}
          strokeWidth="15px"
          r={rad}
          className="fill-none stroke-[#FFD0EC] "
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset,
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }}
          transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
        />

        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy="0.3"
          fill="#FFD0EC"
         
          className="text-2xl font-bold"
        >
          {percentages}%
        </text>
      </svg>
    </div>
  );
};
