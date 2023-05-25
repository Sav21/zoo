import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Animals from './pages/Animals';
import SingleAnimal from './pages/SingleAnimal';
import AddAnimal from './pages/AddAnimal';
import { useState } from 'react';
import Sectors from './pages/Sectors';
import SingleSector from './pages/SingleSector';

const listOfAnimals = [
  {
    name: "krava",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "snake"
  },
  {
    name: "delfin",
    species: "mammal",
    sector: "snake"
  },
  {
    name: "koza",
    species: "mammal",
    sector: "bird"
  },
  {
    name: "ovca",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "bird"
  },
  {
    name: "pas",
    species: "mammal",
    date_of_birth: new Date().toDateString(),
    sector: "bird"
  },
];

const animalSectors = ["bird", "snake"];

function App() {
  const [animals, setAnimals] = useState(listOfAnimals);

  const [state, setState] = useState({
    name: "",
    species: "",
    date_of_birth: "",
    sector: ""
  });

  const onRemove = (name) => {
    setAnimals((prevState) =>
      prevState.filter((animal) => animal.name !== name)
    );
  };

  const onMoveToTop = (name) => {
    setAnimals((prevState) => 
      prevState = [prevState.filter((animal) => animal.name === name)[0], ...prevState.filter((animal) => animal.name !== name)]
    );
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const onSector = (sector) => {
    let sectorAnimals = animals.filter((animal) => animal.sector == sector);
    let animalsCombined = "";
    sectorAnimals.forEach(animal => animalsCombined += animal.name + ' ');
    alert(animalsCombined);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state.sector);

    let newAnimal = {
      name: state.name,
      species: state.species,
      date_of_birth: state.date_of_birth,
      sector: state.sector
    }
    console.log(state);
    
    setAnimals((prevState) => prevState = [...prevState, newAnimal]);
  }

  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="animals" element={<Animals animals={animals}  onRemove={onRemove} onMoveToTop={onMoveToTop}/>}></Route>
      <Route path="animals/:id" element={<SingleAnimal animals={animals} />}></Route>
      <Route path="addAnimal" element={<AddAnimal handleSubmit={handleSubmit} handleInputChange={handleInputChange} state={state} />}></Route>
      <Route path="sectors" element={<Sectors animalSectors={animalSectors} onSector={onSector} />}></Route>
      <Route path="sectors/:id" element={<SingleSector animals={animals} animalSectors={animalSectors} />}></Route>

    </Routes>
  );
}

export default App;