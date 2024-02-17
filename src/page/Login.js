import React, { useState } from "react";
import axios from "axios";
import empl from "../img/empl.png";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [getpassword, setPassword] = useState("");
  const [show, setshow] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const toShow = () => {
    setshow(!show);
  };

  const onFinish = (event) => {
    event.preventDefault();

    // Reset previous error messages
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please enter your email.");
      return;
    }

    if (!getpassword) {
      setPasswordError("Please enter your password.");
      return;
    }
  };

  const submit = async () => {
    axios
      .post("http://147.185.221.18:34530/login", {
        identifier: email,
        password: getpassword,
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res.data["token"]);
          localStorage.setItem("token", String(res.data["token"]));
          window.location.replace("/");
        } else {
          setPasswordError("Your password is incorrect");
        }
      });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center justify-center ">
      <div className="bg-white flex rounded-2xl shadow-lg max-w-3xl p-5 md:mx-10 items-center mb-8">
        {/* form */}
        <div className="md:w-1/2 px-8 md:px-16">
          <h2 className="font-bold text-2xl text-center text-black">
            เข้าสู่<span className="text-[#935858]">ระบบ</span>
          </h2>
          <form action="" className="flex flex-col gap-4" onSubmit={onFinish}>
            <input
              type="text"
              name="email"
              placeholder="อีเมล์"
              className="p-2 mt-8 rounded-xl border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <span className="text-red-500">{emailError}</span>
            <div className="relative">
              <input
                type={show === false ? "password" : "text"}
                name="password"
                placeholder="รหัสผ่าน"
                className="p-2 rounded-xl border w-full"
                value={getpassword}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <div className="absolute top-1/2 right-3 -translate-y-1/2">
                {show === false ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-eye "
                    viewBox="0 0 16 16"
                    onClick={toShow}
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="gray"
                    class="bi bi-eye-slash"
                    viewBox="0 0 16 16"
                    onClick={toShow}
                  >
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                  </svg>
                )}
              </div>
            </div>
            <span className="text-red-500">{passwordError}</span>

            {/* <div className="flex justify-end -mt-3 text-xs text-yellow-500 mb-3 font-semibold">ลืมรหัสผ่าน?</div> */}
            {/* <Link to={`/ResetPassword/${encodedRole}`} >
              <div className="flex justify-end -mt-3 text-xs text-yellow-500 mb-3 font-semibold cursor-pointer">ลืมรหัสผ่าน?</div>
            </Link> */}
            <button
              className="bg-[#935858] rounded-full text-xl text-white py-2 hover:scale-105 duration-300"
              type="submit"
              onClick={submit}
            >
              เข้าสู่ระบบ
            </button>
            <div className="flex justify-center ">
              ยังไม่มีบัญชี ?{" "}
              <div>
                <span className="mx-2 text-[#935858] text-center ">
                  <a href="/register">สมัครเลย !</a>
                </span>
              </div>{" "}
            </div>
          </form>
        </div>
        {/* image something */}
        <div className="md:block hidden w-1/2 p-5 rounded-2xl bg-gray-100">
          {" "}
          <img className=" rounded-full mx-auto" src={empl}></img>
        </div>
      </div>
      <div className="hover:scale-105 duration-300 mt-8"></div>
    </section>
  );
};
