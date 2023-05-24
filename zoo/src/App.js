import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Animals from './pages/Animals';
import SingleAnimal from './pages/SingleAnimal';
import AddAnimalForm from './components/AddAnimalForm';
import Sectors from './components/Sectors';
import SectorId from './components/SectorId';

const animals = [
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

function App() {
  return (
    <Routes>
      <Route index element={<Welcome />}></Route>
      <Route path="animals" element={<Animals animals={animals} />}></Route>
      <Route path="animals/:id" element={<SingleAnimal animals={animals}/>}></Route>
      <Route path="addAnimalForm" element={<AddAnimalForm />}></Route>
      <Route path="sectors" element={<Sectors />}></Route>
      {/* <Route path="sectors/:id" element={<SectorId />}></Route> */}

    </Routes>
  );
}

export default App;