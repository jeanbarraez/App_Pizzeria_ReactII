import { useContext, useEffect } from "react";
import { PizzaContext } from "../context/PizzaContext";
import Button from "react-bootstrap/Button";
const PurchasesMade = () => {
  const { cart, setCart } = useContext(PizzaContext);

  const totalPrice = cart.reduce((acc, foundItems) => {
    return acc + foundItems.quantity * foundItems.price;
  }, 0);

  const decrement = (findArticles) => {
    const updatedPurchase = cart.map((item) => {
      if (item.id === findArticles && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    const filter = updatedPurchase.filter(
      (findArticles) => findArticles.quantity > 0
    );
    setCart(filter);
  };
  const increase = (findArticles) => {
    const updatedPurchase = cart.map((item) => {
      if (item.id === findArticles) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
      }
      return item;
    });

    setCart(updatedPurchase);
  };

  useEffect(() => {}, [cart]);

  return (
    <main>
      <h4>Detalles del pedido:</h4>
      {cart.map((pizza, k) => (
        <article key={k}>
          <section className="img-name">
            <img style={{ width: 400 }} src={pizza.img} alt={pizza.name} />
            <h4 className="my-3 mb-4 text-center">{pizza.name}</h4>
          </section>
          <section className="increment-decrement">
            <h4 className="my-3 mb-4">
              ${pizza.price * (pizza.quantity || 1)}
            </h4>
            <Button
              className="mx-3"
              variant="danger"
              onClick={() => decrement(pizza.id)}
            >
              Menos -
            </Button>
            <h4>{pizza.quantity || 1}</h4>
            <Button
              className="mx-3 "
              variant="success"
              onClick={() => increase(pizza.id)}
            >
              Mas +
            </Button>
          </section>
        </article>
      ))}
      <section>
        <h4>total:${totalPrice}</h4>
      </section>
      <Button>Ir A Pagar</Button>
    </main>
  );
};

export default PurchasesMade;
