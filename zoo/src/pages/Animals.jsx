import AllAnimals from "../components/AllAnimals";

const Animals = ({animals, onRemove, onMoveToTop}) => {
  return <AllAnimals animals={animals} onRemove={onRemove} onMoveToTop={onMoveToTop} />
}

export default Animals;