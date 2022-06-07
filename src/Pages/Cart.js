import React, { useContext } from "react";
import ShoppingCard from "../Components/ShoppingCard";
import { UserContext } from "../Context/UserContext";

function Cart() {
  const { cart, setCart } = useContext(UserContext);
  return (
    <div>
      <h2>Cart</h2>
      {cart.map((d) => (
        <ShoppingCard img={d.image} name={d.title} key={d.title} />
      ))}
    </div>
  );
}

export default Cart;
