import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

function Home() {
  const msg = useContext(UserContext);
  return (
    <div>
      <h3>hello</h3>
      <h1>{msg}</h1>
    </div>
  );
}

export default Home;
