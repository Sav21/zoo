import { Link } from "react-router-dom";

const Welcome = () => {
  return (
  <div>
    <h1>Welcome</h1>
    <Link to={`/animals`}>Animal list</Link>
    </div>
  )
}

export default Welcome;