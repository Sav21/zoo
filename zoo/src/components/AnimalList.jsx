import { useState } from "react";

const listOfAnimals = [
  {
    name: "krava",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
  {
    name: "delfin",
    species: "mamel",
  },
  {
    name: "koza",
    species: "mamel",
  },
  {
    name: "ovca",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
  {
    name: "pas",
    species: "mamel",
    date_of_birth: new Date().toDateString(),
  },
];


const AnimalList = () => {
  //IDE HOOK
  const [animals, setAnimals] = useState(listOfAnimals);

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };

  const MoveToTop = (index) => {
    const topAnimal = animals[index];
    setAnimals((prevState) => [
      topAnimal,
      ...prevState.filter((_, id) => id !== index),
    ]);
  };
  
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [date_of_birth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevents default behaviour of form submit action

//  };

const handleSubmit = (event) => {
  event.preventDefault();

  setMessage(`Hello ${name}!`);
  setName('');
  setSpecies('');
  setDateOfBirth('');
};

  return (
    <div>
      <form>
        <label onSubmit={handleSubmit}>
          Name:
          <input
            type='text'
            id="name"
            name="animalName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          </label>
          <label>
          Species:
          <input
            type='text'
            id="species"
            name="animalSpecies"
            value={species}
            onChange={(e) => {
              setSpecies(e.target.value);
            }}
          />
          </label>
          <label>
          Date of Birth:
          <input
            type='text'
            id="date_of_birth"
            value={date_of_birth}
            onChange={(e) => {
              setDateOfBirth(e.target.value);
            }}
          />
          </label>
          <button type="submit">Submit</button>
          <h2>{message}</h2>


      </form>
      <table>
        <thead>
          <tr>
            <th>Ime zivotinje</th>
            <th>Vrsta zivotinje</th>
            <th>Datum zivotinje</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            // pozovi hook
            <tr key={index}>
              <td>{animal.name}</td>
              <td>{animal.species}</td>
              <td>{animal.date_of_birth}</td>
              <td>
                <button onClick={() => onRemove(animal.name)}>Remove</button>
                <button onClick={() => MoveToTop(index)}>Move to top</button>
              </td>
            </tr>
            
          ))}
        </tbody>
      </table>
    </div>
    
  );
};







export default AnimalList;
