import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getSpecialtyRender } from '../../utils/Specialties'
import './DegreeSupervisorsPage.css'
import '../../utils/Specialties.css'

const DegreeSupervisorsPage = () => {
  const [degreeSupervisors, setDegreeSupervisors] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const mockData = [
      {
        id: 1,
        firstName: 'Ivan',
        lastName: 'Ivanov',
        email: 'ivan.ivanov@mail.com',
        cabinet: 2345,
        workingTime: '10:00 - 17:00',
        specialties: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'Java'
            }
        ]
      },
      {
        id: 2,
        firstName: 'Boris',
        lastName: 'Slavov',
        email: 'boris.slavov@mail.com',
        cabinet: 1551,
        workingTime: '9:00 - 15:00',
        specialties: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'Java'
            }
        ]
      },
      {
        id: 3,
        firstName: 'Petar',
        lastName: 'Trendafilov',
        email: 'petar.trandafilov@mail.com',
        cabinet: 12601,
        workingTime: '11:00 - 18:00',
        specialties: [
            {
                id: 0,
                name: 'React'
            },
            {
                id: 1,
                name: 'Java'
            },
            {
                id: 2,
                name: 'Ruby'
            }
        ]
      }
    ]

    return mockData
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
            <h2>{degreeSupervisor.firstName} {degreeSupervisor.lastName}</h2>
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
