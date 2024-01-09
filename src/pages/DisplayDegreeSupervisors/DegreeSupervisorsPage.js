import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSpecialtyRender } from '../../utils/Specialties'
import './DegreeSupervisorsPage.css'
import '../../utils/Specialties.css'

const DegreeSupervisorsPage = () => {
  const [degreeSupervisors, setDegreeSupervisors] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = fetch('/api/thesissupervisor')
    return (await response).json();
  }

  useEffect(() => {
    fetchData().then((data) => {
      setDegreeSupervisors(data)
    })
  }, [])


  const handleInfoButtonClick = (degreeSupervisor) => {
    navigate(`/degree-supervisor/${degreeSupervisor.id}`, { state: { degreeSupervisor } })
  }

  return (
    <div className='degreeSupervisorsDisplay'>
      <h1>Degree Supervisors</h1>
      <div className='itemGrid'>
        {degreeSupervisors.map((degreeSupervisor) => (
          <div key={degreeSupervisor.id} className='itemCard'>
            <h2>{degreeSupervisor.user.firstName} {degreeSupervisor.user.lastName}</h2>
            <div className='specialtiesContainer'>
                {degreeSupervisor.specialties.map((specialty) => (
                    getSpecialtyRender(specialty.id, specialty.name)
                ))}
            </div>
            <br/>
            <button
              onClick={() => handleInfoButtonClick(degreeSupervisor)}
              className='readMoreButton'
            >
              View Supervisor
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreeSupervisorsPage
