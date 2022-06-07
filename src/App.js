import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Setting from "./Pages/Setting";
import { UserContext } from "./Context/UserContext";
import { useState } from "react";
import { Swiggy } from "./Utils/DummyDatas";

function App() {
  const [data, setData] = useState(Swiggy);
  return (
    <div className="App">
      <UserContext.Provider value={{ data, setData }}>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard"></Route>
          <Route element={<Setting />} path="/setting"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
