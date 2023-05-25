import AddAnimalForm from "../components/AddAnimalForm";

const AddAnimal = ({handleSubmit, handleInputChange, state}) => {
  return <AddAnimalForm handleSubmit={handleSubmit} handleInputChange={handleInputChange} state={state}/>
}

export default AddAnimal;