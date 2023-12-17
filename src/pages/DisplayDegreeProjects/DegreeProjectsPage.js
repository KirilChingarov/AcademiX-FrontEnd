import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './DegreeProjectsPage.css'

const DegreeProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    const mockData = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing.',
      },
      { id: 2, title: 'Project 2', description: 'Description of Project 2' },
      { id: 3, title: 'Project 3', description: 'Description of Project 3' },
      { id: 4, title: 'Project 4', description: 'Description of Project 4' },
      { id: 5, title: 'Project 5', description: 'Description of Project 5' },
      { id: 6, title: 'Project 6', description: 'Description of Project 6' },
      { id: 7, title: 'Project 7', description: 'Description of Project 7' },
      { id: 8, title: 'Project 8', description: 'Description of Project 8' },
    ]

    return mockData
  }

  useEffect(() => {
    fetchData().then((data) => {
      setProjects(data)
    })
  }, [])

  const handleReadMore = (project) => {
    navigate(`/project/${project.id}`, { state: { project } })
  }

  return (
    <div className='degreeProjectsDisplay'>
      <h1>Degree Projects</h1>
      <div className='projectsGrid'>
        {projects.map((project) => (
          <div key={project.id} className='projectCard'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <button
              onClick={() => handleReadMore(project)}
              className='readMoreButton'
            >
              Read more
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DegreeProjectsPage
