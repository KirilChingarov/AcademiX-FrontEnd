import React, { useState } from 'react'
import './CreateDegreeProjectPage.css'

const CreateDegreeProjectPage = () => {
  const [degreeTitle, setDegreeTitle] = useState('')
  const [degreeDescription, setDegreeDescription] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Degree Title:', degreeTitle)
    console.log('Degree Description:', degreeDescription)
  }

  return (
    <div className='degreeProjectForm'>
      <h1>Create Your Degree Project</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='degreeTitle'>Degree Title *</label>
          <input
            type='text'
            id='degreeTitle'
            className='formInput'
            value={degreeTitle}
            onChange={(e) => setDegreeTitle(e.target.value)}
            required
          />
        </div>
        <div className='formGroup'>
          <label htmlFor='degreeDescription'>Degree Description</label>
          <textarea
            id='degreeDescription'
            className='formInput'
            value={degreeDescription}
            onChange={(e) => setDegreeDescription(e.target.value)}
          />
        </div>
        <button type='submit' className='submitButton'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default CreateDegreeProjectPage
