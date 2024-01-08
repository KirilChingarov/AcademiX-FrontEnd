import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ReviewersPage.css'

const ReviewersPage = () => {
  const [reviewers, setReviewers] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const mockData = [
      {
        id: 1,
        firstName: 'Lubomir',
        lastName: 'Petrov',
        email: 'ivan.ivanov@mail.com',
        cabinet: 2345,
        workingTime: '10:00 - 17:00'
      },
      {
        id: 2,
        firstName: 'Boyan',
        lastName: 'Dqnkov',
        email: 'boris.slavov@mail.com',
        cabinet: 1551,
        workingTime: '9:00 - 15:00'
      },
      {
        id: 3,
        firstName: 'Teodor',
        lastName: 'Simeonov',
        email: 'petar.trandafilov@mail.com',
        cabinet: 12601,
        workingTime: '11:00 - 18:00'
      }
    ]

    return mockData
  }

  useEffect(() => {
    fetchData().then((data) => {
        setReviewers(data)
    })
  }, [])


  const handleInfoButtonClick = (reviewer) => {
    navigate(`/reviewers/${reviewer.id}`, { state: { reviewer } })
  }

  return (
    <div className='reviewersDisplay'>
      <h1>Degree Supervisors</h1>
      <div className='itemGrid'>
        {reviewers.map((reviewer) => (
          <div key={reviewer.id} className='itemCard'>
            <h2>{reviewer.firstName} {reviewer.lastName}</h2>
            <br/>
            <button
              onClick={() => handleInfoButtonClick(reviewer)}
              className='readMoreButton'
            >
              View Reviewer
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewersPage
