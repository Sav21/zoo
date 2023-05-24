import { Link } from "react-router-dom";

const AddAnimalForm = ({handleSubmit, handleInputChange, state}) => {

  return (
    <form onSubmit={handleSubmit} style={{border: "1px solid black", padding: "5px", borderRadius: "5px"}}>
        Name:
        <input type="text" name="name"  onChange={handleInputChange} />
        Species:
        <input type="text" name="species"  onChange={handleInputChange} />
        Date:
        <input type="date" name="date_of_birth" onChange={handleInputChange} />
        <select name="sector"  onChange={handleInputChange} >
          <option disabled defaultValue>Select sector:</option>
          <option value="bird">bird</option>
          <option value="snake">snake</option>
        </select>
        <Link to={`/animals`}><button type="submit">Add animal</button></Link>
      </form>
  );
}

export default AddAnimalForm;