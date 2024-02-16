import React, { useEffect, useState } from "react";
import FitnessData from "../component/FitnessData";
import { render } from "@testing-library/react";
import { CircularProgressBar } from "./CircularProgressBar";
import axios from "axios";
import { json } from "react-router-dom";
// function calculateBpmZone(maxBpm, currentBpm) {
//   const bpmZone = {};
//   bpmZone.label = maxBpm > currentBpm ? "Above average" : "Below average";
//   return bpmZone;
// }

function Step() {
  const [step, setStep] = useState([]);
  const [maxstep, setMaxStep] = useState(10000);
  const [calories, setCalories] = useState(360);
  const [percentages, setPercentages] = useState(35);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log("Fetching data..."); // Log before the request

  //       const response = await fetch(
  //         "https://e0fe-49-48-116-229.ngrok-free.app/data",
  //         {
  //           headers: {
  //             "Content-Type": "application/json", // Maintain for clarity
  //             Accept: "application/json",
  //           },
  //           responseType: "json",
  //         }
  //       )
  //         .then((response) => response.json())
  //         .then((data) => data.ForEach((item) => console.log(item)));

  //       // console.log("Response:", response); // Log the full response object

  //       // Check if response is JSON and has expected data structure
  //       if (response.data && typeof response.data === "object") {
  //         console.log("Valid data:", response.data); // Log parsed data
  //         setStep(response.data);
  //       } else {
  //         console.warn("Unexpected data format. Ignoring response.");
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       // Handle errors more gracefully (e.g., display error message, retry)
  //     }
  //   };
  //   fetchData()
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://147.185.221.18:34530/data", {
          headers: {
            "Content-Type": "application/json",
            // 'ngrok-skip-browser-warning' : "1231",
            // "User-Agent": "PostmanRuntime/7.36.3",
            // "Accept": "*/*",
            // "Accept-Encoding": "gzip, deflate, br",
            // "Connection": "keep-alive",
          },
        });
        // const data = await response.json();
        setStep(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // console.log(test.data);
  // console.log(step.data);f

  // useEffect(() => {
  //   async function getStep() {
  //     try {
  //       const response = await fetch(
  //         "https://e0fe-49-48-116-229.ngrok-free.app/data",
  //         {
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!response.ok) {
  //         throw new Error("Failed to fetch data");
  //       }

  //       const data = await response.json();
  //       setStep(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }

  //   getStep();
  //   console.log(step);

  // }, []);

  // console.log(step, "step");
  // const today = new Date();
  // const month = today.getMonth() + 1;
  // const year = today.getFullYear();
  // const date = today.getDate();
  // const currentDate = `${date}/${month}/${year}`;
  // const age = 20;
  // const maxBpm = 220 - age * 0.6;
  // const bpmZone = calculateBpmZone(maxBpm, 121);
  // const data = {
  //   date: currentDate,
  //   steps: 7895,
  //   bpm: 121,
  //   zone: bpmZone.label,
  //   goal: 10000,
  //   weeklyStats: "360 kcal",
  // };

  return (
    <div className=" bg-[#CAACAC]  w-full h-[250px] md:h-[400px] rounded-3xl ">
      <div className="flex font-bold md:text-[40px] mx-[16px] pt-[20px]">
        จำนวนก้าว
      </div>
      <div className="flex md:px-10 justify-evenly items-center ">
        <div>
          <CircularProgressBar percentages={percentages} circleWidth={200} />
          <input
            //wait value from Backend
            type="range"
            min="0"
            max="100"
            step="1"
            value={percentages}
            onChange={(e) => setPercentages(e.target.value)}
          />
        </div>
        <div className="flex flex-col md:text-2xl">
          <div>เป้าหมายของวันนี้</div>
          <div>จำนวนก้าวในวันนี้</div>
          <div className="flex">แคลอรี่</div>
        </div>
        <div className="flex flex-col md:text-2xl">
          <div>{maxstep}</div>
          {/* <div></div> */}
          <div>{calories}</div>
        </div>

        {/* <div className="flex">{JSON.stringify(step)}</div> */}
      </div>
    </div>
  );
}

export default Step;
