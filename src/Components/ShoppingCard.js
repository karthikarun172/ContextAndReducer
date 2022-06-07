import React from "react";

function ShoppingCard({ name, img, onClick }) {
  return (
    <div
      style={{
        margin: `10px 10px 50px 10px`,
      }}
    >
      <img src={img} style={{ height: "100px", width: "100px" }} />
      <p>{name.slice(0, 25)}...</p>
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
}

export default ShoppingCard;
