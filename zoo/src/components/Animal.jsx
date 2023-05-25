import { Link } from "react-router-dom";
import "../form.css";

const Animal = ({animal, index, onRemove, onMoveToTop}) => {
  return (
    <tr key={index}>
      <td>{animal.name}</td>
      <td>{animal.species}</td>
      <td>{animal.sector}</td>
      <td>{animal.date_of_birth ? animal.date_of_birth : "Nepoznato"}</td>
      <td>
        <button onClick={() => onRemove(animal.name)} class="button-3">Remove</button>
      </td>
      <td>
        <button onClick={() => onMoveToTop(animal.name)} class="button-3">Move To Top</button>
      </td>
      <td>
        <Link class="button-3" to={`/animals/${index}`}>See</Link>
      </td>
    </tr>
  )
}

export default Animal;