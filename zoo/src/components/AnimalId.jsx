import { Link } from "react-router-dom";

const AnimalId = ({animals, index}) => {
  let animal = animals[index];
  
  return (
    <div style={{color: "white", border: "3px solid white", padding: "10px", borderRadius: "10px", fontSize: "20px"}}>
      <div>Animal name: {animal.name}</div>
      <div>Animal species: {animal.species}</div>
      <div>Animal date of birth: {animal.date_of_birth}</div>
      <div>Animal sector: {animal.sector}</div>
      <Link class="button-3" to={`/Animals`} style={{color: "inherit", textDecoration: "none", margin: "5px"}}>Return</Link>
    </div>
  );
}

export default AnimalId;