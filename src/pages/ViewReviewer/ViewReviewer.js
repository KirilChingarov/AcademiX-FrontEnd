import { useLocation,  useNavigate } from 'react-router-dom'
import './ViewReviewer.css'
import { useEffect, useState } from 'react'

const ViewReviewer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [reviewer, setReviewer] = useState([])

  const handleBack = () => {
    navigate(`/reviewers`)
  }

  const fetchData = async () => {
    const reviewerId = location.pathname.split("/").pop()
    const response = fetch(`/api/reviewers/${reviewerId}`)
    return (await response).json();
  }

  useEffect(() => {
    fetchData().then((data) => {
        console.log(data)
        setReviewer(data)
    })
  }, [])

  return (
    <div className='viewReviewer'>
      <h1>View Reviewer Details</h1>
      <div className='details'>
        <h1>{reviewer.user?.firstName} {reviewer.user?.lastName}</h1>
        <p>Email: {reviewer.email}</p>
        <p>Cabinet: {reviewer.cabinet}</p>
        <p>Working Time:  {reviewer.workingTime}</p>
      </div>
      <button onClick={handleBack} className='backButton'>
        Go back
      </button>
    </div>
  )
}

export default ViewReviewer