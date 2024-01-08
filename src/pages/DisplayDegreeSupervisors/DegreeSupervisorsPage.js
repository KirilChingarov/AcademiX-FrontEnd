import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './DegreeSupervisorsPage.css'
import '../../utils/Specialties.css'

const DegreeSupervisorsPage = () => {
  const [degreeSupervisors, setDegreeSupervisors] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const mockData = [
      {
        id: 1,
        firstName: 'Degree',
        lastName: 'Supervisor',
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
        firstName: 'Degree',
        lastName: 'Supervisor',
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
        firstName: 'Degree',
        lastName: 'Supervisor',
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
      }
    ]

    return mockData
  }

  useEffect(() => {
    fetchData().then((data) => {
        setDegreeSupervisors(data)
    })
  }, [])

  const getSpecialtyRender = (specialtyId, specialtyName) => {
    switch(specialtyId){
        case 0:
            return <p key={specialtyId} className='react'>{specialtyName}</p>;
        case 1:
            return <p key={specialtyId} className='java'>{specialtyName}</p>;
        case 2:
            return <p key={specialtyId} className='ruby'>{specialtyName}</p>;
        default:
            return <p></p>;
    }
  }

  const handleReadMore = (project) => {
    //navigate(`/project/${project.id}`, { state: { project } })
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
              onClick={() => handleReadMore(degreeSupervisor)}
              className='readMoreButton'
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreeSupervisorsPage
