import React, { useState } from "react";
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };
  return (
    <div className="Navbar flex justify-center md:justify-between relative m-0 pt-10 max-h-fit md:h-[200px] sm:rounded-none md:rounded-bl-[70px] text-white  items-center bg-[#935858] flex-wrap text-lg md:text-lg xl:text-2xl">
      <div className="flex gap-5 mx-5 lg:gap-10 my-6 lg:mx-10 items-center  ">
        <div className="flex transition duration-300 hover:scale-105 text-5xl font-bold ml-5">
          MedSoles
        </div>
      </div>
      <div className="md:flex gap-5 hidden text-3xl">
        <ul className="md:flex gap-5 md:gap-x-20  md:mx-0 mx-auto hidden">
          <li>
            <a href="/" className="hover:text-gray-200">
              Home
            </a>
          </li>
          <li>
            <a href="/clinic" className="hover:text-gray-200">
              Clinic
            </a>
          </li>
          <li>
            <a href="/profile" className="hover:text-gray-200">
              Profile
            </a>
          </li>
        </ul>
      </div>
      <div className="md:flex  items-center mx-auto md:mx-10 text-white hidden ">
        <button class="group relative h-[70px] w-[200px] overflow-hidden overflow-x-hidden rounded-full bg-white px-8 py-2 text-[#E35757]">
          <span class="relative z-10">Login</span>
          <span class="absolute inset-0 overflow-hidden rounded-md">
            <span class="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gray-200 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </button>
        {/* <button className="rounded-[60px] bg-white h-[70px] w-[200px] text-[#E35757] hover:bg-gray-200 transition delay-100 duration-300 ease-in-out">
          Login
        </button> */}
      </div>
      <div className="md:hidden mx-10 absolute right-0 top-0 translate-y-8">
        <button className="text-white" onClick={toggleMenu}>
          <span className="sr-only">Toggle menu</span>
          <div
            className={`w-6 h-1 bg-white my-1 ${menuOpen ? "rotate-45" : ""}`}
          ></div>
          <div
            className={`w-6 h-1 bg-white ${menuOpen ? "opacity-0" : ""}`}
          ></div>
          <div
            className={`w-6 h-1 bg-white my-1 ${menuOpen ? "-rotate-45" : ""}`}
          ></div>
        </button>
      </div>

      {menuOpen && (
        <div className="flex basis-full flex-col items-center flex-wrap gap-5 text-white mb-10">
          <ul className="flex flex-col gap-5 mx-auto">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/clinic" className="hover:text-gray-200">
                Clinic
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-gray-200">
                Profile
              </a>
            </li>
          </ul>
          <div>
            <button className="rounded-[60px] h-[50px] w-[130px] bg-white text-[#E35757] hover:bg-gray-200 transition delay-100 duration-300 ease-in-out">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
    //Navbar flex justify-center relative m-0 sm:justify-between sm:rounded-none md:rounded-xl md:m-2 items-center bg-[#0A3F5A] flex-wrap text-lg md:text-lg xl:text-2xl
    // <div className="Navbar flex justify-center relative m-0 h-[150px] sm:justify-between items-center  sm:rounded-none md:rounded-bl-[80px]  bg-[#935858]  text-lg md:text-xl xl:text-2xl">
    //   <div className="flex gap-5 mx-5 lg:gap-10 lg:mx-10 items-center text-white">
    //     <div className="transition duration-300 hover:scale-105 text-4xl font-bold">
    //       MedSoles
    //     </div>
    //     <ul className="md:flex gap-5 md:gap-10  md:mx-0 mx-auto hidden">
    //       <li>
    //         <a href="/" className="hover:text-gray-200">
    //           Home
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/clinic" className="hover:text-gray-200">
    //           Clinic
    //         </a>
    //       </li>
    //       <li>
    //         <a href="/profile" className="hover:text-gray-200">
    //           Profile
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="md:hidden mx-10 absolute  right-0 top-0 translate-y-8 ">
    //     <button className="text-white" onClick={toggleMenu}>
    //       <span className="sr-only">Toggle menu</span>
    //       <div
    //         className={`w-6 h-1 bg-white my-1 ${menuOpen ? "rotate-45" : ""}`}
    //       ></div>
    //       <div
    //         className={`w-6 h-1 bg-white ${menuOpen ? "opacity-0" : ""}`}
    //       ></div>
    //       <div
    //         className={`w-6 h-1 bg-white my-1 ${menuOpen ? "-rotate-45" : ""}`}
    //       ></div>
    //     </button>
    //   </div>
    //   {menuOpen && (
    //     <div className="flex basis-full flex-col items-center flex-wrap gap-5 text-white mb-10 ">
    //         <div className="transition">1</div>
    //         <div>2</div>
    //         <div>3</div>
    //       {/* <Link to="/Profile">โปรไฟล์</Link>
    //       <Link to="/Job">ค้นหางาน</Link> */}
    //       {/* {role === "user" && <Link to="/Profile">โปรไฟล์</Link>}
    //       {role === "shop" && <Link to="/Job">เพิ่มประกาศ</Link>} */}
    //     </div>
    //   )}
    // </div>

    // <div>
    //   <div className="md:hidden mx-10 absolute right-0 top-0 translate-y-8">
    //     <button className="text-black">
    //       <span className="sr-only">Toggle menu</span>
    //       <div
    //         className={`w-6 h-1 bg-white my-1 ${menuOpen ? "rotate-45" : ""}`}
    //       ></div>
    //       <div
    //         className={`w-6 h-1 bg-white ${menuOpen ? "opacity-0" : ""}`}
    //       ></div>
    //       <div
    //         className={`w-6 h-1 bg-white my-1 ${menuOpen ? "-rotate-45" : ""}`}
    //       ></div>
    //     </button>
    //   </div>
    //   {menuOpen && (
    //     <div className="flex basis-full flex-col items-center flex-wrap gap-5 text-white mb-10">

    //       {/* <Link to="/Profile">โปรไฟล์</Link>
    //           <Link to="/Job">ค้นหางาน</Link> */}
    //       {/* {role === "user" && <Link to="/Profile">โปรไฟล์</Link>}
    //           {role === "shop" && <Link to="/Job">เพิ่มประกาศ</Link>} */}
    //     </div>
    //   )}
    // </div>
  );
}

export default Navbar;
