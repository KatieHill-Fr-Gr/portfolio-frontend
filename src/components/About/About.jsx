import './About.css'
import { useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'

const About = () => {
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const [technologies, setTechnologies] = useState([])

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await getTechnologies()
                setTechnologies(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
                if (error.response && error.response.status === 404) {
                    navigate('/404', { replace: true })
                } else {
                    setError({ message: 'Unable to load technologies' })
                }
            }
        }
            fetchTechnologies()
    }, [])

    return (
       <section className="page-content">
                <div className="page-title">
                        <h1>About</h1>
                        <p>...</p>
                </div>
                    <div className="tech-section">
                        <h2>Tech</h2>
                        {technologies && technologies.length > 0 && (
                            <div className="technologies">
                                {technologies.map((tech, index) => {
                                       <p key={index}>{tech.name}</p>
                                })}
                            </div>
                        )}
                        </div>
  
                        
            <div className="image-gallery">
                {/* pictures of me */}

                        </div>
        </section>

    )
}

export default About