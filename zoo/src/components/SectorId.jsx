const SectorId = ({animals, animalSectors, index}) => {
  let sector = animalSectors[index];
  let sectorAnimals = animals.filter((animal) => animal.sector == sector);
  console.log(sectorAnimals);
  return (
    <div style={{color: "white"}}>
      {sectorAnimals.map((animal) => 
        <div style={{fontSize: "30px", border: "3px solid white", borderRadius: "10px", margin: "5px", padding: "5px"}}>{animal.name}</div>
      )}
    </div>
  )
  
}

export default SectorId;