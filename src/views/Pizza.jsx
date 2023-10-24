import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Pizza = () => {
  const { id } = useParams();
  const { pizzas, pizzaDescription, setPizzaDescription, appendCart } =
    useContext(PizzaContext);

  const navigate = useNavigate();

  const filter = () => {
    const pizzaFilter = pizzas.find((pizza) => pizza.id === id);
    setPizzaDescription(pizzaFilter);
  };
  useEffect(() => {
    filter();
  }, []);

  return (
    <main key={pizzaDescription.id} >
      <Card className="d-flex justify-content-center text-center"  style={{ width: 500 }} >
        <Card.Img
          className="mt-3"
          style={{ width: 500 }}
          variant="top"
          src={pizzaDescription.img}
        />
        <article>
          <Card.Body>
            <h2>{pizzaDescription.name}</h2>
            <Card.Text>
              <strong>Descripcion:</strong>
            </Card.Text>
            <p className="descripcion">{pizzaDescription.desc}</p>
          </Card.Body>
        </article>
        <span className="text-center">
          <strong>Precio:${pizzaDescription.price}</strong>
        </span>
        <section className="detalle-botonesPrice">
          <Button 
            variant="danger"
            style={{ width: 150 }}
            onClick={() => appendCart(pizzaDescription)}
            className="mx-3 "
          >
            Añadir a 🛒
          </Button>
          <Button  onClick={() => navigate("/")} >volver a seleccion</Button>
        </section>
      </Card>
    </main>
  );
};

export default Pizza;
