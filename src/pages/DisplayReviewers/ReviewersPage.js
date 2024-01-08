import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './ReviewersPage.css'

const ReviewersPage = () => {
  const [reviewers, setReviewers] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const response = fetch('/api/reviewers')
    return (await response).json();
  }

  useEffect(() => {
    fetchData().then((data) => {
        console.log(data);
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
