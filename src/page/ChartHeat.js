import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../component/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import Footer from "../component/Footer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartHeat() {
  const [heattemp, setHeatTemp] = useState(0);
  const [keyValues, setKeyValues] = useState({});
  const [displayedLabels, setDisplayedLabels] = useState([]);
  const [displayedData, setDisplayedData] = useState([]);

  const desiredKeys = ["temperature", "create_at"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://147.185.221.18:34530/authorized/user/data",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );

        if (response.status !== 200 || !response.data) {
          console.error("Error fetching data:", response.statusText);
          setKeyValues({});
          return;
        }

        setHeatTemp(response);
      } catch (error) {
        console.error("Error fetching data:", error);
        setKeyValues({});
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (heattemp.data) {
      const values = {};
      for (const key of desiredKeys) {
        values[key] = heattemp.data.map((item) => item[key] || "N/A");
      }
      setKeyValues(values);

      // Initially display the first 10 values
      setDisplayedLabels(values.create_at.slice(0, 10));
      setDisplayedData(values.temperature.slice(0, 10));

      // Update to the next 10 values after 5 seconds
      setTimeout(() => {
        setDisplayedLabels(values.create_at.slice(10, 20));
        setDisplayedData(values.temperature.slice(10, 20));
      }, 5000);
    }
  }, [heattemp.data]);
  if (heattemp && heattemp.data) {
    console.log(heattemp.data.length);
    console.log(heattemp.data);
  } else {
    console.error("heattemp.data is undefined or null");
  }

  const allLabels = heattemp?.data?.map((item) => item.create_at);
  const latestLabels = allLabels?.slice(-10);

  const data = {
    labels: heattemp?.data?.map((item) => item.create_at),
    datasets: [
      {
        label: "อุณหภูมิ",
        data: heattemp?.data?.map((item) => item.temperature),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        ticks: {
          font: { size: 14 },
        },
        min: 0,
        max: heattemp?.data?.length || 0,
      },
      y: {
        type: "linear",
        ticks: {
          font: { size: 16 },
          stepSize: 1,
        },
        min: 20,
        max: 40,
      },
    },
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
          },
        },
      },
      title: {
        display: true,
        text: "อุณหภูมิร่างกาย",
        font: {
          size: 20,
        },
      },
    },
  };

  const average =
    heattemp.data?.reduce((acc, curr) => acc + curr.temperature, 0) /
    heattemp.data?.length;

  return (
    // "relative mx-auto min-h-[180vh] m-0  "
    // {`${!checkSubmitBTN() ? "bg-emerald-400 hover:bg-emerald-300" : "bg-gray-400"} text-cyan-950 mt-5 rounded-full duration-300 w-60 p-2 font-semibold`}
    <div
      className={`${
        average > 40 ? "bg-red-600" : "bg-white"
      } relative mx-auto min-h-[180vh] m-0`}
    >
      <Navbar />
      <div className="mb-10 mt-5">
        <div className="text-xl">
          อุณหภูมิร่างกายเฉลี่ยของคุณคือ {average.toFixed(2)}
        </div>
        <div className="text-2xl">
          {average > 40
            ? "คุณมีโอกาสเกิดโรค heatstroke"
            : "อุณหภูมิร่างกายของคุณอยู่ในระดับปกติ"}
        </div>
      </div>

      <Line data={data} options={options} />
      <Footer />
    </div>
  );
}

export default ChartHeat;
