import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import CreateDegreeProjectPage from './pages/CreateDegreeProject/CreateDegreeProjectPage'
import EditDegreeProjectPage from './pages/EditDegreeProject/EditDegreeProjectPage'
import DegreeProjectsPage from './pages/DisplayDegreeProjects/DegreeProjectsPage'
import ViewDegreeProject from './pages/ViewDegreeProject/ViewDegreeProject'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
