import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import CreateDegreeProjectPage from './pages/CreateDegreeProject/CreateDegreeProjectPage'
import EditDegreeProjectPage from './pages/EditDegreeProject/EditDegreeProjectPage'
import DegreeProjectsPage from './pages/DisplayDegreeProjects/DegreeProjectsPage'
import ViewDegreeProject from './pages/ViewDegreeProject/ViewDegreeProject'
import HomePage from './pages/Home/HomePage'
import RegisterPage from './pages/Register/RegisterPage'
import DegreeSupervisorsPage from './pages/DisplayDegreeSupervisors/DegreeSupervisorsPage'
import ViewDegreeSupervisor from './pages/ViewDegreeSupervisor/ViewDegreeSupervisor'
import ReviewersPage from './pages/DisplayReviewers/ReviewersPage'
import ViewReviewer from './pages/ViewReviewer/ViewReviewer'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage/>} />
          <Route
            path='/create-degree-project'
            element={<CreateDegreeProjectPage />}
          />
          <Route
            path='/edit-degree-project'
            element={<EditDegreeProjectPage />}
          />
          <Route path='/projects' element={<DegreeProjectsPage />} />
          <Route path='/project/:projectId' element={<ViewDegreeProject />} />
          <Route path='/degree-supervisors' element={<DegreeSupervisorsPage />} />
          <Route path='/degree-supervisor/:degreeSupervisorId' element={<ViewDegreeSupervisor/>} />
          <Route path='/reviewers' element={<ReviewersPage/>} />
          <Route path='/reviewers/:reviewerId' element={<ViewReviewer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
