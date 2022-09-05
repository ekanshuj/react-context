import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext';

const Collection = ({ name, price }) => {

  const { addToBasket } = useContext(BasketContext);
  return (
    <div style={{
      aspectRatio: "1",
      width: "300px",
      border: "2px solid black",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}>
      <span>{name}</span>
      <span style={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}>Rs.{price}</span>
      <button onClick={() => addToBasket(name, price)} style={{
        padding: "10px 45px",
        textTransform: "uppercase",
        fontWeight: "bold",
        background: "transparent",
        border: "1px solid black",
        cursor: "pointer",
      }}>Add</button>
    </div>
  )
}

export default Collection