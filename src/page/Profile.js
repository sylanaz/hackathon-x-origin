import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import chang from "../img/chang.png";
import { FaTrophy } from "react-icons/fa";
function Profile() {
  const hight = 70;
  const weight = 177;
  const bmi = weight / (hight / 100) ** 2;
  const dailyStep = 10000;
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
            className="w-[500px] h-[500px] rounded-full mx-auto"
            src={chang}
          ></img>
          <div className="flex justify-center text-2xl font-bold ">
            <FaTrophy className="mt-1 mr-2" />
            ทำเป้าหมายบรรลุแล้ว 20 วัน
          </div>
          <div className="flex items-center justify-center space-x-10 mt-10 font-medium text-xl md:text-2xl">
            <div className="flex flex-col items-start space-y-5">
              <div>ชื่อ-นามสกุล</div>
              <div>เพศ</div>
              <div>วันเกิด</div>
              <div>ส่วนสูง</div>
              <div>น้ำหนักตัว</div>
              <div>ค่า BMI</div>
              <div>ตั้งค่าเป้าหมาย(จำนวนก้าว)</div>
            </div>
            <div className="flex flex-col items-start space-y-5 ">
              <div>Chang รักแม่นะครับ Abatakum</div>
              <div>ครัวซอง</div>
              <div>16/02/2546</div>
              <div>{hight} cm</div>
              <div>{weight} kg</div>
              <div>{bmi}</div>
              <div>{dailyStep}</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
