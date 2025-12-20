import './styles/layout.css'
import './styles/index.css'

import { Routes, Route } from 'react-router-dom'

// import { useContext } from 'react'
// import { UserContext } from './contexts/UserContext'


import NavBar from './components/NavBar/NavBar'
import FooterWithSocialLinks from './components/FooterBar/FooterBar'
import HomePage from './components/HomePage/HomePage'
import ProjectPage from './components/ProjectPage/ProjectPage'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
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
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects/:projectId' element={<ProjectPage />} />
        <Route path='/skills' element={<Skills />} />
        <Route path="/404" element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      </div>
      <FooterWithSocialLinks />
    </>
  )
}

export default App