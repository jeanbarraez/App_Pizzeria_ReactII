import { useState, useEffect, createContext } from "react";
import axios from "axios";

const UrlPizzas = "/pizzas.json";
export const PizzaContext = createContext();

const PizzaContextProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [pizzaDescription, setPizzaDescription] = useState({});
  const [cart, setCart] = useState([]); 

  const PizzaInformation = async () => {
    

    try {
      const response = await axios.get(UrlPizzas);
      if (response.status !== 200) {
        throw new Error("Data not found");
      }
      setPizzas(response.data);
    } catch (err) {
      console.error("Data not found", err);
    }
  };

  const appendCart = (findArticles) => {
   
    const updatedCart = cart.map((item) => {
      if (item.id === findArticles.id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });

    if (!updatedCart.find((item) => item.id === findArticles.id)) {
      updatedCart.push({ ...findArticles, quantity: 1 });
    }

    setCart(updatedCart);
  };

  useEffect(() => {
    PizzaInformation(); 
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        setPizzas,
        appendCart,
        cart,
        setCart,
        pizzaDescription,
        setPizzaDescription,
      }}
    >
      {children}
    </PizzaContext.Provider>
  ); 
};

export default PizzaContextProvider;
