import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import CreateDegreeProjectPage from './pages/CreateDegreeProject/CreateDegreeProjectPage'

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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
