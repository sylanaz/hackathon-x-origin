import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
import Home from "./page/Home";
function App() {
  return (
    <div className="App font-kanit ">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
