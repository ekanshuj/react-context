import React from 'react';
import { products } from '../config/config';
import Collection from './Collection';

const Collections = () => {

  return (
    <div style={{ margin: "15px 0px" }}>
      <div style={{ textAlign: "center" }}>
        <span style={{ fontSize: "1.5rem", textTransform: "uppercase", fontWeight: "bold" }}>Context Collections</span>
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
          products?.map((product) => {
            return (
              <Collection name={product.name} price={product.price} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Collections