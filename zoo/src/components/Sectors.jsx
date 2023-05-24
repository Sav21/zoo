import SectorId from "./SectorId";
const animalSectors = ["bird", "snake"];

const Sectors = ({animals}) => {
  const onSector = (sector) => {
    let sectorAnimals = animals.filter((animal) => animal.sector == sector);
    let animalsCombined = "";
    sectorAnimals.forEach(animal => animalsCombined += animal.name + ' ');
    alert(animalsCombined);
  }
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      Sektori:
      {animalSectors.map((sector, id) => 
          <SectorId key={id} sector={sector} animals={animals} onSector={onSector}/>
        )
      }
    </div>
  )
}

export default Sectors;