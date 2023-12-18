import React from 'react'
import './GuestHomePage.css'

const GuestHomePage = () => {
  return (
    <div className='guestHomePage'>
      <div className='content'>
        <h1 className='title'>AcademiX</h1>
        <p className='description'>
          Your gateway to academic project collaboration at TU-Sofia.
        </p>
        {/* Add more content or components here as needed */}
      </div>
      {/* Background image is set via CSS */}
    </div>
  )
}

export default GuestHomePage
