import { useState, useEffect } from 'react'
import './EditDegreeProjectPage.css'

const EditDegreeProjectPage = ({ existingData }) => {
  const [degreeTitle, setDegreeTitle] = useState('')
  const [degreeDescription, setDegreeDescription] = useState('')

  const fetchData = async () => {
    const mockData = {
      degreeTitle: 'Sample Degree Title',
      degreeDescription: 'This is a sample degree description.',
    }

    return mockData
  }

  useEffect(() => {
    fetchData().then((data) => {
      setDegreeTitle(data.degreeTitle)
      setDegreeDescription(data.degreeDescription)
    })
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Updated Degree Title:', degreeTitle)
    console.log('Updated Degree Description:', degreeDescription)
  }

  return (
    <div className='degreeProjectEditForm'>
      <h1>Edit Your Degree Project</h1>
      <form onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='degreeTitle'>Degree Title</label>
          <input
            type='text'
            id='degreeTitle'
            className='formInput'
            value={degreeTitle}
            onChange={(e) => setDegreeTitle(e.target.value)}
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
        <button type='submit' className='updateButton'>
          Update Degree Project
        </button>
      </form>
    </div>
  )
}

export default EditDegreeProjectPage
