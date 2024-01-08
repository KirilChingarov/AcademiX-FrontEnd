import { useLocation, useNavigate } from 'react-router-dom'
import './ViewReviewer.css'

const ViewReviewer = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const reviewer = location.state.reviewer

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div className='viewReviewer'>
      <h1>View Project Details</h1>
      <div className='details'>
        <h1>{reviewer.user.firstName} {reviewer.user.lastName}</h1>
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
