import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Home() {
  const { data, setData } = useContext(UserContext);
  return (
    <div>
      <h3>Home la irunthu</h3>
      <button onClick={() => setData(data + 1)}>add</button>
      <h1>{data}</h1>
      <button onClick={() => setData(data - 1)}>sub</button>
    </div>
  );
}

export default Home;
