import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

export default function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
  const { cart } = useContext(PizzaContext);
  const totalPrice = cart.reduce(
    (total, pizza) => total + pizza.quantity * pizza.price,
    0
  );

  return (
    <Navbar
     
      variant="light"
      style={{ background: "blue" }}
    >
      {/* committxd */}
      <Container className="d-flex justify-content-end my-3  ">
        <div>
          <Navbar.Brand  >
            <NavLink
            
              style={{ textDecoration: "none" }}
              to="/"
              className={setActiveClass}
            >
              🍕Pizzeria Mamma Mia
            </NavLink>
            <NavLink
              style={{ textDecoration: "none" }}
              to="/cart" className={setActiveClass}
            >
              <FaCartPlus /> <span id="total">$:{totalPrice}</span>
            </NavLink>
           
          </Navbar.Brand>
        </div>
      </Container>
    </Navbar>
  );
}
