import { Link } from "react-router-dom";

const AllSectors = ({animalSectors, onSector}) => {
  return (
    <div style={{color: "white", border: "3px solid white", padding: "10px", borderRadius: "5px"}}>
      Sektori:
      {animalSectors.map((sector, index) => 
          <div style={{border: '1px solid black', borderRadius: '5px', margin: '4px', border: '3px solid white', padding: '5px'}}>
            <div>{sector}</div>
            <Link to={`/sectors/${index}`}><button class="button-3">Select</button></Link>
          </div>
        )
      }
    </div>
  )
}

export default AllSectors;