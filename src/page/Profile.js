import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import chang from "../img/chang.png";
import { FaTrophy } from "react-icons/fa";
import axios from "axios";
function Profile() {
  const dailyStep = 10000;
  const [username, setUsername] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [profile, setProfile] = useState({});
  const [keyValues, setKeyValues] = useState({});

  // const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://147.185.221.18:34530/authorized/user/account", {
  //         headers: {
  //           "Content-Type": "application/json",
  //           "Authorization": "Bearer " + localStorage.getItem("token")
  //         },
  //       });
  //       // const data = await response.json();
  //       setProfile(response)
  //       setUsername(response.data["username"])
  //       setHeight(response.data["height"])
  //       setWeight(response.data["weight"])
  //       console.log(response)
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://147.185.221.18:34530/authorized/user/account",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        // const data = await response.json();
        setProfile(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(keyValues.height, keyValues.weight, keyValues.avatar, keyValues.username)

  const bmi = profile.weight / (profile.height / 100) ** 2;
  return (
    <div className="relative mx-auto min-h-[180vh] m-0  ">
      {" "}
      <Navbar />
      <div className="flex md:justify-center justify-between relative ml-10 mt-5">
        <div className="flex items-center justify-center absolute right-10 text-center font-medium w-[160px] h-[50px] text-xl rounded-3xl px-2 bg-[#D2BDBD] text-black">
          แก้ไขข้อมูล
        </div>
        <div className=" w-full rounded-2xl  py-5">
          <img
            className="w-[300px] h-[300px] rounded-full mx-auto"
            src={profile.avatar}
          ></img>
          <div className="flex justify-center text-2xl font-bold ">
            <FaTrophy className="mt-1 mr-2" />
            ทำเป้าหมายบรรลุแล้ว 20 วัน
          </div>
          <div className="flex items-center justify-center space-x-10 mt-10 font-medium text-xl md:text-2xl">
            <div className="flex flex-col items-start space-y-5">
              <div>ชื่อผู้ใช้</div>
              <div>เพศ</div>
              <div>วันเกิด</div>
              <div>ส่วนสูง</div>
              <div>น้ำหนักตัว</div>
              <div>ค่า BMI</div>
              <div>ตั้งค่าเป้าหมาย(จำนวนก้าว)</div>
            </div>
            <div className="flex flex-col items-start space-y-5 ">
              <div>{profile.username}</div>
              <div>Male</div>
              <div>16/02/2547</div>
              <div>{profile.height} cm</div>
              <div>{profile.weight} kg</div>
              <div>{bmi}</div>
              <div>{dailyStep}</div>
              {/* <button onClick={fetchData}>Click here</button> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
