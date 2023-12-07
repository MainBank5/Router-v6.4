import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate()
  return (
    <div>
      <h1>Projects</h1>

      <button onClick={() => {navigate('/')}}>Go back Home</button>
    </div>
  )
}

export default Projects;