import { useState, useEffect } from 'react'
import './DegreeProjectsPage.css' // Import the CSS file

const DegreeProjectsPage = () => {
  const [projects, setProjects] = useState([])

  const fetchData = async () => {
    const mockData = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1',
      },
      { id: 2, title: 'Project 2', description: 'Description of Project 2' },
      { id: 3, title: 'Project 3', description: 'Description of Project 3' },
      { id: 4, title: 'Project 4', description: 'Description of Project 3' },
      { id: 5, title: 'Project 5', description: 'Description of Project 3' },
      { id: 6, title: 'Project 6', description: 'Description of Project 3' },
      { id: 7, title: 'Project 7', description: 'Description of Project 3' },
      { id: 8, title: 'Project 8', description: 'Description of Project 3' },
    ]

    return mockData
  }

  useEffect(() => {
    fetchData().then((data) => {
      setProjects(data)
    })
  }, [])

  return (
    <div className='degreeProjectsDisplay'>
      <h1>Degree Projects</h1>
      <div className='projectsGrid'>
        {projects.map((project) => (
          <div key={project.id} className='projectCard'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreeProjectsPage
