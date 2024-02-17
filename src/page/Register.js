import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [getpassword, setPassword] = useState("");
  const [getsecondPassword, setSecondPassword] = useState("");
  const [getfirstname, setFirstname] = useState("");
  const [getlastname, setLastname] = useState("");
  // const [fullname, setFullname] = useState("");
  const [weight, setWeight] = useState(0.0);
  const [height, setHeight] = useState(0.0);
  const [username, setUsername] = useState("");
  const [gettelnumber, setTelnumber] = useState("");
  // ? เผื่อได้ใช้มั้ง const [occupation, setOccupation] = useState("");
  const emailvalidate = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordsMatch = getpassword === getsecondPassword;
  const passwordsvalidate =
    getpassword.length >= 8 &&
    getpassword.length <= 20 &&
    /[A-Z]/.test(getpassword) &&
    /[a-z]/.test(getpassword) &&
    /[0-9]/.test(getpassword) &&
    /[^A-Za-z0-9]/.test(getpassword);

  const [registrationData, setRegistrationData] = useState({
    username: username,
    email: email,
    password: getpassword,
    weight: weight,
    height: height,
  });
  const handleRegistration = async () => {
    try {
      const response = await axios.post("http://147.185.221.18:34530/register", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        console.log("Registration successful!");
        // Handle successful registration, e.g., redirect to another page
      } else {
        console.error("Registration failed. Please try again.");
        // Handle registration failure, e.g., display an error message
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  const onFinish = async (event) => {
    // const getfullname = getfirstname + " " + getlastname;
    event.preventDefault();

    await axios
      .post("http://147.185.221.18:34530/register", {
        username: username,
        email: email,
        password: getpassword,
        weight: weight,
        height: height,
      })
      .then(async (res) => {});
  };
  const checkSubmitBTN = () => {
    if (
      email === "" ||
      username === "" ||
      getpassword === "" ||
      weight === "" ||
      height === ""
    ) {
      return true;
    }
  };

  console.log(email + height + weight + getpassword + username);
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-gray-100 flex md:min-w-xl rounded-2xl shadow-lg max-w-xs md:max-w-xl p-5 items-center">
        {/* form */}
        <div className="px-8 md:px-16">
          <h2 className="flex items-center justify-center font-bold text-2xl text-center ">
            สำหรับ<span className="text-yellow-500">ผู้ใช้ใหม่</span>
          </h2>
          <form
            action=""
            className="flex flex-col "
            onSubmit={handleRegistration}
          >
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="name"
                placeholder="username"
                className="p-2 mt-8 rounded-xl border "
                value={username}
                onChange={(event) => {
                  const alphabeticValue = event.target.value.replace(
                    /[^A-Za-zก-๙]/g,
                    ""
                  );
                  setUsername(alphabeticValue);
                }}
                required
              ></input>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="email"
                name="email"
                placeholder="อีเมล์"
                className="p-2 mt-5 rounded-xl border"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              ></input>
              {emailvalidate ? null : (
                <div className="text-red-500 font-bold text-sm">
                  กรุณากรอกอีเมล์ให้ถูกต้อง
                </div>
              )}

              <input
                type="text"
                name="password"
                placeholder="รหัสผ่าน"
                className="p-2 mt-5 rounded-xl border w-full"
                value={getpassword}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              {passwordsvalidate ? null : (
                <div className="text-red-500 font-bold text-sm">
                  รหัสผ่านควรมีความยาวตั้งแต่ 8-20 ตัวอักษร
                  ประกอบด้วยตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว ตัวพิมพ์เล็กอย่างน้อย 1
                  ตัว ตัวเลขอย่างน้อย 1 ตัว ตัวอักษรพิเศษอย่างน้อย 1 ตัว
                </div>
              )}
              <div className="flex">
                <div className="flex gap-5 w-1/2">
                  <input
                    type="number"
                    name="name"
                    placeholder="weight"
                    className="p-2 mt-8 rounded-xl border "
                    value={weight}
                    onChange={(event) => {
                      const alphabeticValue = event.target.value.replace(
                        /[^0-9]/,
                        ""
                      );
                      setWeight(alphabeticValue);
                    }}
                    required
                  ></input>
                </div>
                <div className="flex gap-5">
                  <input
                    type="number"
                    name="name"
                    placeholder="height"
                    className="p-2 mt-8 rounded-xl border "
                    value={height}
                    onChange={(event) => {
                      const alphabeticValue = event.target.value.replace(
                        /[^0-9]/,
                        ""
                      );
                      setHeight(alphabeticValue);
                    }}
                    required
                  ></input>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                disabled={checkSubmitBTN()}
                className={`${
                  !checkSubmitBTN()
                    ? "bg-emerald-400 hover:bg-emerald-300"
                    : "bg-gray-400"
                } text-cyan-950 mt-5 rounded-full duration-300 w-60 p-2 font-semibold`}
              >
                สมัครสมาชิก
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hover:scale-105 duration-300 mt-8">
        <Link to={"/Login"}>
          <span className="text-xl">Back to Login</span>
        </Link>
      </div>
    </section>
  );
};
