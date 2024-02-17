import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Profile from "./page/Profile";
import { Login } from "./page/Login";
import { Register } from "./page/Register";
import ChartHeat from "./page/ChartHeat";

function App() {
  return (
    <div className="App font-kanit ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/heat" element={<ChartHeat />} />
      </Routes>
    </div>
  );
}

export default App;
