import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import Step from "../component/Step";
import Stat from "../component/Stat";
import Heartrate from "../component/Heartrate";
import Footer from "../component/Footer";

function Home() {
  const [date, setdate] = useState(Date());
  const [keyValues, setKeyValues] = useState({});
  const [jsonDate, setJsonDate] = useState(Date());

  const splitData = () => {
    // Split the string by space
    const parts = jsonDate.split(" ");

    // Extract date and time parts
    const dateStr = parts[0];
    const timeStr = parts[1];

    // Create Date objects from strings
    const dateObj = new Date(dateStr.replace(/-/g, "/")); // Replace hyphens with slashes for Date constructor
    const timeObj = new Date(`1970-01-01T${timeStr}`); // Create a Date object with time only

    // Return the split data
    return { dateObj, timeObj };
  };

  const { dateObj, timeObj } = splitData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://147.185.221.18:34530/data", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // const data = await response.json();
        setdate(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const extractValues = () => {
    const desiredKeys = ["heart_beat", "temperature", "oxygen", "create_at"]; // Replace with your desired keys
    const values = {};
    date.data?.forEach((item) => {
      desiredKeys.forEach((key) => {
        values[key] = item[key] || "N/A"; // Handle missing values (optional)
      });
    });
    setKeyValues(values);
  };

  useEffect(() => {
    extractValues();
  }, [date.data]);

  console.log(keyValues.create_at);
  date.data?.forEach((item) => {
    console.log(item.create_at);
  });

  const datetimeSplit = keyValues.create_at?.split(" ", 2);

  // This will only access the `0`th element of the `datetimeSplit` array if the array is defined and has at least two elements.
  const realDate = datetimeSplit?.[0];
  const realTime = datetimeSplit?.[1];

  console.log(realDate);
  return (
    <div className=" relative mx-auto min-h-[120vh] m-0  ">
      <Navbar />
      <div className="text-xl md:text-3xl mt-5">
        ข้อมูลล่าสุดเมื่อวันที่ <span>{realDate}</span> เวลา{" "}
        {realTime}
      </div>
      <div className="mx-3 md:mx-20 ">
        <div className="flex justify-center mt-[80px] ">
          <Step />
        </div>
        <div className="grid grid-flow-col my-4 space-x-2 md:space-x-4">
          <Heartrate />
          <Stat />
        </div>
        {/* <div className="flex font-bold md:text-xl">
            คลิปวิดีโอแนะนำกิจกรรมการออกกำลังกาย
          </div> */}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
