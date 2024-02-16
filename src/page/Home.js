import React, { Component } from "react";
import Navbar from "../component/Navbar";
import Step from "../component/Step";
import Stat from "../component/Stat";
import Heartrate from "../component/Heartrate";
import Footer from "../component/Footer";

export default class Home extends Component {
  render() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    const currentDate = `${date}/${month}/${year}`;
    return (
      <div className="mx-auto min-h-[100vh]  ">
        <Navbar />
        <div className="text-xl md:text-3xl mt-5">
          ข้อมูลเมื่อวันที่ <span>{currentDate}</span>
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
}
