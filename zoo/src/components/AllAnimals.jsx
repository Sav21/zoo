import Animal from "./Animal";
import { Link } from "react-router-dom";

const AllAnimals = ({animals, onRemove, onMoveToTop}) => {
  return (
    <div class="form" style={{width: "750px", height: "fit-content"}}>
    <table style={{color: "white"}}>
        <thead>
          <tr class="input-container ic1">
            <th>Ime zivotinje</th>
            <th>Ne znam</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>See Animal</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index}  onRemove={onRemove} onMoveToTop={onMoveToTop}/>
          ))}
        </tbody>
      </table>
      <div ><Link class="button-3" style={{color: "inherit", textDecoration: "none", margin: "10px"}} to={`/AddAnimal`}>Add Animal</Link></div>
      <div ><Link class="button-3" style={{color: "inherit", textDecoration: "none", margin: "10px"}} to={`/Sectors`}>Sectors</Link></div>
    </div>
  );
}

export default AllAnimals;