import { useLocation, useNavigate } from 'react-router-dom'
import { getSpecialtyRender } from '../../utils/Specialties'
import './ViewDegreeSupervisor.css'

const ViewDegreeSupervisor = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const degreeSupervisor = location.state.degreeSupervisor

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='viewDegreeSupervisor'>
      <h1>View Project Details</h1>
      <div className='details'>
        <h1>{degreeSupervisor.firstName} {degreeSupervisor.lastName}</h1>
        <p>Email: {degreeSupervisor.email}</p>
        <p>Cabinet: {degreeSupervisor.cabinet}</p>
        <p>Working Time:  {degreeSupervisor.workingTime}</p>
        <br/>
        <p>Specialties:</p>
        <div className='specialtiesContainer'>
            {degreeSupervisor.specialties.map((specialty) => (
                getSpecialtyRender(specialty.id, specialty.name)
            ))}
        </div>
      </div>
      <button onClick={handleBack} className='backButton'>
        Go back
      </button>
    </div>
  )
}

export default ViewDegreeSupervisor
