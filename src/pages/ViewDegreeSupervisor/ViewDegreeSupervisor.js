import { useLocation, useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getSpecialtyRender } from '../../utils/Specialties'
import './ViewDegreeSupervisor.css'

const ViewDegreeSupervisor = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [degreeSupervisor, setDegreeSupervisors] = useState([])

  const handleBack = () => {
    navigate(`/degree-supervisors`)
  }

  const fetchData = async () => {
    const supervisorId = location.pathname.split("/").pop()
    const response = fetch(`/api/thesissupervisor/${supervisorId}`)
    return (await response).json();
  }

  useEffect(() => {
    fetchData().then((data) => {
        console.log(data);
        setDegreeSupervisors(data)
    })
  }, [])

  return (
    <div className='viewDegreeSupervisor'>
      <h1>View Degree Supervisor</h1>
      <div className='details'>
        <h1>{degreeSupervisor.user?.firstName} {degreeSupervisor.user?.lastName}</h1>
        <p>Email: {degreeSupervisor.email}</p>
        <p>Cabinet: {degreeSupervisor.cabinet}</p>
        <p>Working Time:  {degreeSupervisor.workingTime}</p>
        <br/>
        <p>Specialties:</p>
        <div className='specialtiesContainer'>
            {degreeSupervisor.specialties?.map((specialty) => (
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
