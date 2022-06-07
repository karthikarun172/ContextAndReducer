import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

function Dashboard() {
  const { cart } = useContext(UserContext);

  console.log(cart, "sd");
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default Dashboard;
