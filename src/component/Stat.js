import React, { useState, useEffect } from "react";
import { MdBubbleChart } from "react-icons/md";
import axios from "axios";
function Stat() {
  const [oxygen, setOxygen] = useState(0);
  const [keyValues, setKeyValues] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://147.185.221.18:34530/authorized/user/data", {
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + localStorage.getItem("token")

          },
        });
        // const data = await response.json();
        setOxygen(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const extractValues = () => {
    const desiredKeys = ["heart_beat", "temperature", "oxygen"]; // Replace with your desired keys
    const values = {};
    oxygen.data?.forEach((item) => {
      desiredKeys.forEach((key) => {
        values[key] = item[key] || "N/A"; // Handle missing values (optional)
      });
    });
    setKeyValues(values);
  };

  useEffect(() => {
    extractValues();
  }, [oxygen.data]);

  const SpOZone = keyValues.oxygen < 95 ? "ต่ำกว่าเกณฑ์" : "มาตราฐาน";

  // console.log(keyValues.oxygen);
  // oxygen.data?.forEach((item) => {
  //   console.log(item.oxygen);
  // });
  return (
    <div className="bg-[#E0B1B1] h-[200px] md:h-[400px] rounded-3xl">
      <div className="flex font-bold md:text-[40px] mx-[16px] my-[20px]">
        ปริมาณออกซิเจนในเลือด
      </div>
      <div className="flex justify-around items-center  mt-[20px] mx-[20px]">
        <div>
          <div className="flex justify-center">
            <MdBubbleChart className=" w-[50px] h-[50px] md:w-[150px] md:h-[150px]" />
          </div>
          <div className="md:text-xl flex justify-center">
            {/* Display specific data properties from step.data */}
            Oxygen in Blood: {keyValues.oxygen} %
          </div>
        </div>
        <div className="flex items-center md:text-xl">
          ค่าออกซิเจนในเลือดอยู่ในเกณฑ์ {SpOZone}
        </div>
      </div>
    </div>
  );
}

export default Stat;
