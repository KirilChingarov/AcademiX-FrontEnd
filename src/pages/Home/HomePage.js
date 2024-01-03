import { useState, useEffect } from 'react'
import './HomePage.css'
import GuestHomePage from '../GuestHome/GuestHomePage'

const HomePage = () => {
  const [userType, setUserType] = useState('guest')

  return (
    <div className='homePage'>
      <div>
        {/* {userType === 'student' && <StudentHomePage />}
        {userType === 'supervisor' && <SupervisorHomePage />}
        {userType === 'reviewer' && <ReviewerHomePage />} */}
        {userType === 'guest' && <GuestHomePage />}
      </div>
    </div>
  )
}

export default HomePage
