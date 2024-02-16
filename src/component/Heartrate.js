import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaHeartPulse } from "react-icons/fa6";
function Heartrate({ gender, age }) {
  const [heartrate, setHeartrate] = useState(0);
  const [keyValues, setKeyValues] = useState({});


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://147.185.221.18:34530/data", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // const data = await response.json();
        setHeartrate(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const extractValues = () => {
    const desiredKeys = ["heart_beat", "temperature","oxygen"]; // Replace with your desired keys
    const values = {};
    heartrate.data?.forEach((item) => {
      desiredKeys.forEach((key) => {
        values[key] = item[key] || "N/A"; // Handle missing values (optional)
      });
    });
    setKeyValues(values);
  };

  useEffect(() => {
    extractValues();
  }, [heartrate.data]);
  // console.log(keyValues.heart_beat);

  // heartrate.data?.forEach((item) => {
  //   console.log(item.heart_beat);
  // })

  return (
    <div className=" bg-[#E0B1B1] h-[200px] md:h-[400px] rounded-3xl">
      <div className="flex font-bold md:text-[40px] mx-[16px] my-[20px]">
        อัตราการเต้นของชีพจร
      </div>
      <div className="flex justify-around items-center  mt-[20px] mx-[20px]">
        <div>
          <FaHeartPulse className=" w-[50px] h-[50px] md:w-[150px] md:h-[150px] " />
          {/* <div>{heartrate} BPM</div> */}
          <div>
            {/* Display specific data properties from step.data */}
            <p>
              <strong>Heart Beat:</strong> {keyValues.heart_beat}
              <br />
              {/* Add similar lines for other desired properties */}
            </p>
          </div>
        </div>
        <div>
          <div className="flex items-center ">
            คุณกำลังอยู่ใน Zone {heartrate < 60 ? "ต่ำ" : "สูง"}
          </div>
          {/* <div>อุณหภูมิร่างกายปัจจุบัน {temperature} เซลเซียส</div> */}
        </div>
      </div>
    </div>
  );
}

export default Heartrate;
