import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Setting from "./Pages/Setting";
import { UserContext } from "./Context/UserContext";
import { useEffect, useState } from "react";
import { Swiggy } from "./Utils/DummyDatas";
import axios from "axios";
import Cart from "./Pages/Cart";
import ReducerHook from "./Pages/ReducerHook";
import ReducerTodo from "./Pages/ReducerTodo";

function App() {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  const getData = async () => {
    const { data } = await axios.get("https://fakestoreapi.com/products");
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <UserContext.Provider value={{ data, setData, cart, setCart }}>
        <Routes>
          <Route element={<Dashboard />} path="/dashboard"></Route>
          <Route element={<Setting />} path="/setting"></Route>
          <Route element={<Cart />} path="/cart"></Route>
          <Route element={<ReducerHook />} path="/reducer"></Route>
          <Route element={<ReducerTodo />} path="/todoReducer"></Route>
          <Route element={<Home />} path="/"></Route>
        </Routes>
      </UserContext.Provider>
    </div>
  );
}

export default App;
