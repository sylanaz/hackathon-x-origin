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
  //   data: [heattemp.data?.[heattemp.data.length - 1]?.temperature],
  //   [heattemp.data?.[heattemp.data.length - 1]
  console.log(heattemp.data?.[heattemp.data.length - 1]);
  const allLabels = heattemp.data?.map((item) => item.create_at);
  const latestLabels = allLabels?.slice(-10);
  const data = {
    labels: latestLabels,
    // labels: heattemp.data?.map((item) => item.create_at),
    datasets: [
      {
        label: "อุณหภูมิ",
        data: heattemp.data?.map((item) => item.temperature),
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
        max: 10,
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
          size: 40,
        },
      },
    },
  };

  return (
    <div className="relative mx-auto min-h-[150vh] m-0">
      <Navbar />
      <Line data={data} options={options} />
      <Footer />
    </div>
  );
}

export default ChartHeat;
