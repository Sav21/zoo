import { useParams } from "react-router-dom";
import AnimalId from "../components/AnimalId";

const SingleAnimal = ({animals, onRemove, onMoveToTop}) => {
  const {id} = useParams();
  return <AnimalId animals={animals} index={id} onRemove={onRemove} onMoveToTop={onMoveToTop}/>
}

export default SingleAnimal;