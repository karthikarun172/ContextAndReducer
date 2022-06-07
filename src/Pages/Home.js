import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ShoppingCard from "../Components/ShoppingCard";
import { UserContext } from "../Context/UserContext";

function Home() {
  const { data, setData, setCart, cart } = useContext(UserContext);

  const handleCart = (value) => {
    setCart([...cart, value]);
  };

  console.log(cart, "ds");

  const navigate = useNavigate();

  return (
    <div>
      <h3>Home la irunthu</h3>
      <button onClick={() => navigate("/cart")}>go to Cart</button>

      {data.map((d) => (
        <ShoppingCard
          onClick={() => handleCart(d)}
          key={d.title}
          name={d.title}
          img={d.image}
        ></ShoppingCard>
      ))}
    </div>
  );
}

export default Home;
