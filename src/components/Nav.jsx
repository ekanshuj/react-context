import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import BasketContext from '../context/BasketContext'

const Nav = () => {

  const { basket } = useContext(BasketContext);

  return (
    <header style={{ background: "fuchsia" }}>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "21px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div style={{ fontWeight: "bold", fontSize: "1.555rem", textTransform: "uppercase", cursor: "pointer" }}>
            React-Context
          </div>
        </Link>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/basket" style={{ textDecoration: "none", color: "black" }}>
            <div style={{
              aspectRatio: "1", width: "35px", background: "white", border: "1px solid black", display: "grid",
              placeItems: "center",
              fontWeight: "bolder",
              cursor: "pointer"
            }}>
              C
            </div>
          </Link>
          <span style={{ marginInline: "7px", fontWeight: "bolder", fontSize: "1.3rem" }}>
            {basket.length}
          </span>
        </div>
      </nav>
    </header>
  )
}

export default Nav