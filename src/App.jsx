import './styles/layout.css'
import './styles/index.css'
// import './styles/forms.css'

import { Routes, Route } from 'react-router-dom'

// import { useContext } from 'react'
// import { UserContext } from './contexts/UserContext'


import NavBar from './components/NavBar/NavBar'
import FooterBar from './components/FooterBar/FooterBar'
import HomePage from './components/HomePage/HomePage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import NotFound from './components/404NotFound/404NotFound'

// Contexts

function App() {
  // const { user, setUser } = useContext(UserContext)

  return (
    <>
      <NavBar />
        <div className='page-container'>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/projects/:projectId' element={<ProjectPage />} />
        // <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <FooterBar />
    </>
  )
}

export default App