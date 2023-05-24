import SectorsDisplay from "../components2/SectorsDisplay";
import AddAnimalForm from "./AddAnimalForm";
import Animal from "./Animal";
import { Link } from "react-router-dom";


const AllAnimals = ({animals}) => {
  return (
    <div>
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Sector</th>
            <th>Date of Birth</th>
            <th>See Animal</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <Animal key={index} animal={animal} index={index} />
          ))}
        </tbody>
      </table>
      <div><Link to={`/addAnimalForm`}>Add Animal</Link></div>
      <div><Link to={`/sectors`}>Sectors</Link></div>
      {/* <SectorsDisplay /> */}
    </div>
  );
}

export default AllAnimals;