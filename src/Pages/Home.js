import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Home() {
  const { data, setData } = useContext(UserContext);

  return (
    <div>
      <h3>Home la irunthu</h3>
      <ul>
        {data.map((d) => (
          <li key={d.hotel_Name}>{d.hotel_Name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
