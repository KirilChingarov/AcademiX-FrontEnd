import React from 'react'
import './GuestHomePage.css'
import { useNavigate } from 'react-router-dom'

const GuestHomePage = () => {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate(`/login`)
  }

  const navigateRegister = () => {
    navigate(`/register`)
  }
  return (
    <div className='guestHomePage'>
      <div className='content'>
        <h1 className='title'>AcademiX</h1>
        <p className='description'>
          Your gateway to academic project collaboration at TU-Sofia.
        </p>
        <button 
        id='login-btn'
        onClick={() => {handleLogin()}}>
          Login
        </button>
        <div id='register-container'>
          <h4>Don't have an account?</h4>
          <h4 id='register-btn' onClick={() => navigateRegister()}>Register now!</h4>
        </div>
      </div>
      {/* Background image is set via CSS */}
    </div>
  )
}

export default GuestHomePage
