import './About.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'
import { getUsers, getUserById } from '../../services/users'

const About = () => {
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const [technologies, setTechnologies] = useState([])
    const [myInfo, setMyInfo] = useState(null)
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([])
    const [openItem, setOpenItem] = useState(null)

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index)
    }

    useEffect(() => {
        const fetchTechnologies = async () => {
            try {
                const response = await getTechnologies()
                setTechnologies(response)
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

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const [userRes, contributorsRes] = await Promise.all([
                    getUserById(1),
                    getUsers
                ])

                setMyInfo(userRes.data)
                setUsers(contributorsRes.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchUsers()
    }, [])

    return (
        <section className="page-content">
            <div className="page-title">
                <h1>A junior software engineer with a background in the creative industries, content localization, and digital storytelling.</h1>
            </div>
            {/* <div className="page-img-container">
                        <img src={myInfo.profile_img} alt={myInfo.username} className="page-img" />
                </div> */}
            <div className="about-section">
                <h2>Tech skills</h2>
                <div className="tech-grid">
                    <div className="technologies">
                        <h3 className="sub-heading">FRONTEND</h3>
                        {technologies && technologies.length > 0 && (
                            <div className="tech-list">
                                {technologies
                                    .filter((tech) => tech.category === "Frontend")
                                    .map((tech, index) => (
                                        <p key={index}>{tech.name}</p>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="technologies">
                        <h3 className="sub-heading">BACKEND</h3>
                        {technologies && technologies.length > 0 && (
                            <div className="tech-list">
                                {technologies
                                    .filter((tech) => tech.category === "Backend")
                                    .map((tech, index) => (
                                        <p key={index}>{tech.name}</p>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="technologies">
                        <h3 className="sub-heading">DATABASES</h3>
                        {technologies && technologies.length > 0 && (
                            <div className="tech-list">
                                {technologies
                                    .filter((tech) => tech.category === "Databases")
                                    .map((tech, index) => (
                                        <p key={index}>{tech.name}</p>
                                    ))}
                            </div>
                        )}
                    </div>
                    <div className="technologies">
                        <h3 className="sub-heading">TOOLS & PLATFORMS</h3>
                        {technologies && technologies.length > 0 && (
                            <div className="tech-list">
                                {technologies
                                    .filter((tech) => tech.category === "Tools & Platforms")
                                    .map((tech, index) => (
                                        <p key={index}>{tech.name}</p>
                                    ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className="about-section">
                <h2>Experience</h2>
                <div className="item-list">
                    <div className="item" onClick={() => toggleItem(0)}>
                        <span className="job-title">Software Engineer</span>
                        <span className="year">2025</span>
                        <span className="arrow" style={{ transform: openItem === 0 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            ↓
                        </span>
                    </div>
                    {openItem === 0 && (
                        <div className='item-details'>
                            <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                            </p>
                            <p> My final project was a workflow management and translation app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend designed to support a high volume of data and allow for text analysis.
                            </p>
                        </div>
                    )}
                    <div className="item" onClick={() => toggleItem(1)}>
                        <span className="job-title">Director, Copywriter & Translator</span>
                        <span className="year">2015-2025</span>
                        <span className="arrow" style={{ transform: openItem === 1 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            ↓
                        </span>
                    </div>
                    {openItem === 1 && (
                        <div className='item-details'>
                            <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                            </p>
                            <p> My final project was a workflow management and translation app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend designed to support a high volume of data and allow for text analysis.
                            </p>
                        </div>
                    )}
                    <div className="item" onClick={() => toggleItem(2)}>
                        <span className="job-title">Consultant Copywriter</span>
                        <span className="year">2021-2024</span>
                         <span className="arrow" style={{ transform: openItem === 2 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            ↓
                        </span>
                        </div>
                    {openItem === 2 && (
                        <div className='item-details'>
                            <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                            </p>
                            <p> My final project was a workflow management and translation app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend designed to support a high volume of data and allow for text analysis.
                            </p>
                            <p> For more,
                                <Link to="/projects/" >View project</Link>
                            </p>
                        </div>
                    )}
                    <div className="item" onClick={() => toggleItem(3)}>
                        <span className="job-title">Web Producer & SEO Specialist</span>
                        <span className="year">2016</span>
                        <span className="arrow" style={{ transform: openItem === 3 ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }}>
                            ↓
                        </span>
                    </div>
                    {openItem === 3 && (
                        <div className='item-details'>
                            <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                            </p>
                            <p> My final project was a workflow management and translation app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend designed to support a high volume of data and allow for text analysis.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="about-section">
                <h2>My story</h2>

                {myInfo ? (
                    <div className="about-me">
                        <p>{myInfo.bio}</p>
                    </div>
                ) : (
                    <p>Loading your info...</p>
                )}
            </div>
            {/* contributors */}
        </section>

    )
}

export default About