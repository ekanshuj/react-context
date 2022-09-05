import React, { useContext } from 'react'
import BasketContext from '../context/BasketContext';

const Basket = () => {

  const { basket } = useContext(BasketContext);

  return (
    <div style={{ margin: "15px 0px", }}>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "1.5rem", textTransform: "uppercase", fontWeight: "bold" }}>Basket</span>
      </div>
      <div style={{
        display: "flex",
        flexFlow: "wrap",
        gap: "25px",
        alignItems: "center",
        justifyContent: "center",
        margin: "15px 0px",
        padding: "10px 0px"
      }}>
        {
          basket?.map(item =>
            <div style={{
              aspectRatio: "1",
              width: "300px",
              border: "2px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}>
              <span>{item.name}</span>
              <span style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
              }}>Rs.{item.price}</span>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Basket