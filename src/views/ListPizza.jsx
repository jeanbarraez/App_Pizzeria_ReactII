import React from "react";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ListPizza = () => {
  const { pizzas, appendCart } = useContext(PizzaContext);
  //console.log(pizzas);
  const navigate = useNavigate();
  return (
    <div className="cards">
      {pizzas.map((pizza, i) => (
        <Card key={i}>
          <Card.Img style={{ width: 500 }} variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>{pizza.name}</Card.Title>
            <Card.Text> {pizza.ingredients.join(", ")}</Card.Text>
            <Card.Text>Precio:$ {pizza.price}</Card.Text>
          
            <Button  style={{ width: 150 }}
            className="boton" variant ="danger"
              onClick={() => {
                 navigate(`/Pizza/${pizza.id}`)
              }}
              
            >
             Ver Más Detalles
            </Button>
            <Button onClick={()=> appendCart(pizza)} >
              Añadir a 🛒
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ListPizza;
