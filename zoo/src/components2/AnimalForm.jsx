const AnimalForm = ({handleSubmit, handleInputChange, state}) => {
  return(
    <form onSubmit={handleSubmit} style={{border: "1px solid black", padding: "5px", borderRadius: "5px"}}>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleInputChange} />
        Species:
        <input type="text" name="species" value={state.species} onChange={handleInputChange} />
        Date:
        <input type="date" name="date_of_birth" value={state.date_of_birth} onChange={handleInputChange} />
        <select name="sector" value={state.sector} onChange={handleInputChange} >
          <option disabled defaultValue>Select sector:</option>
          <option value="bird">bird</option>
          <option value="snake">snake</option>
        </select>
        <button type="submit">Add animal</button>
      </form>
  );
}

export default AnimalForm;