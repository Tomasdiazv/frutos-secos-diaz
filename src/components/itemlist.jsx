import React from "react";
import Item from "./item";

export default function ItemList({ Frutos }) {
  return (
    <div>
      {Frutos.map((elem) => {
        return <Item elem={elem} />;
      })}
    </div>
  );
}