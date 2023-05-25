import SectorId from "../components/SectorId";
import { useParams } from "react-router-dom";


const SingleSector = ({animals, animalSectors}) => {
  const {id} = useParams();

  return <SectorId animals={animals} index={id} animalSectors={animalSectors} />
}

export default SingleSector;