import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import Home from "./page/Home";
import Profile from "./page/Profile";
function App() {
  return (
    <div className="App font-kanit ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
