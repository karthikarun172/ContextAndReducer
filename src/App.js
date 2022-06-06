import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Setting from "./Pages/Setting";
import { UserContext } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContext.Provider value="hello from app js">
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
