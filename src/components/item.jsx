import React from "react";

const itemStyle = {
  backgroundColor: "lightGrey",
  fontSize: 13,
  fontFamily: 'Aleo , serif',
};
const styles = {
height: 200,
width: 350,
}

export default function Item({ elem }) {
  return (
    <div style={itemStyle}>
      <div>
      <h1>{elem.nombre}</h1>
      </div>
      <img style={styles} src={elem.url} />
      <h2>{elem.precio}</h2>
      <h3>{elem.description}</h3>

    </div>
  );
}