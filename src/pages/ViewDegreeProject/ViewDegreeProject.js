import { useLocation, useNavigate } from 'react-router-dom'
import './ViewDegreeProject.css'

const ViewDegreeProject = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const project = location.state.project

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='viewDegreeProject'>
      <h1>View Project Details</h1>
      <div className='projectDetails'>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>
      <button onClick={handleBack} className='backButton'>
        Go back
      </button>
    </div>
  )
}

export default ViewDegreeProject
