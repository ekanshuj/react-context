import { createContext, useState } from "react";

const BasketContext = createContext();

export const BasketProvider = ({ children }) => {

  const [basket, setBasket] = useState([]);

  const addToBasket = (name, price) => {
    setBasket((prevState) => [...prevState, { name, price }]);
  }

  return (
    <BasketContext.Provider value={{ basket, addToBasket }}>
      {children}
    </BasketContext.Provider>
  )
}


export default BasketContext;