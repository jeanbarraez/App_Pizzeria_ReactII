import { Link, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
const NotFound = () => {
  const navigate = useNavigate();
  const ClickHome = () => {
    navigate("/");
  };
  return (
    <div className="NotFound">
      
      <img className="img-not-found text-center mb-4" src="https://media.istockphoto.com/id/946894080/vector/404-error-page-not-found-vector-pizza-graphic-background.jpg?s=612x612&w=0&k=20&c=olBzij8zsRch-wGEngDzTzaKdNzB7A2YSQdfJNhgm-A=" alt="not found" style={{width: 700}} />
     
      <Button onClick={ClickHome}>Back to selection</Button>
    </div>
  );
};

export default NotFound;
/* const NotFound = () => {
  const navigate = useNavigate();
  const ClickPokemontsHome = () => {
    navigate(`/Pokemones`);
  };
  return (
    <>
    <div className="not-found">
    <img className="img-not-found" src="https://cdn.dribbble.com/users/1592487/screenshots/6678531/404_4x.png?resize=400x300&vertical=center" alt="not found" style={{width: 700}} />
    
  </div>
  <Button onClick={ClickPokemontsHome}>Back to selection</Button>
    </>
  )
}

export default NotFound */