import './About.css'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getTechnologies } from '../../services/technologies'
import { getUsers, getUserById } from '../../services/users'
import aboutPicture from '../../assets/aboutPicture.png'

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
        <main>
            <section className="hero">
                <div className="page-title">
                    <h1>A junior software engineer with a background in the creative industries, content localization, and digital storytelling.</h1>
                </div></section>
            <section className="page-content">
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
                    <div className="about-stats">
                        <div className="stat">
                        <h2>10</h2>
                        <p>years of experience in creative industries</p>
                        </div>
                        <div className="stat">
                        <h2>35</h2>
                        <p>repositories on GitHub</p>
                        </div>
                        <div className="stat">
                        <h2>420+</h2>
                        <p>hours of coding in an agile environment</p>
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
                            <div className='item-details'
                                style={{
                                    maxHeight: openItem === 0 ? "32rem" : "0rem",
                                    overflow: "hidden",
                                    transition: "max-height 0.9s ease",
                                }}>
                                <p>This was an intense but incredibly enjoyable 12-week bootcamp that covered software engineering fundamentals, agile methodologies and basic UX design. It gave me the chance to develop my understanding of Python and Object Oriented Programming (OOP) while also providing a solid introduction to web development using Javascript, React, Node.js, Express, and Django, as well as database management (MongoDB, PostgreSQL) and REST API design.
                                </p>
                                <p> My final project was a translation and project management app called Catseye – something I’ve been wanting to build for a while. The app combines a React frontend, for a fully responsive and interactive UI, with a Python Django backend integrated with the DeepL API and designed to support a high volume of data.
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
                            <div className='item-details'
                                style={{
                                    maxHeight: openItem === 1 ? "32rem" : "0rem",
                                    overflow: "hidden",
                                    transition: "max-height 0.9s ease",
                                }}>
                                <p>I founded Translation Pod in 2015 and worked alongside a small team of freelance translators and copywriters to provide multilingual copywriting (creative/UX), Search Engine Optimisation (SEO), and translation services for luxury and e-commerce brands.
                                </p>
                                <p>
                                    Over the years, I experimented with many different translation tools and learned Python so I could perform text analysis on translated content. As translation and the creative industries became more focused on tech and AI, I found myself coding more and more before eventually deciding to retrain as a software engineer in 2025.
                                </p>
                                <p>
                                    Brands: LVMH group / Shiseido / Laboratoires Ducastel / Pierre Fabre / Watsons China / Dirce / Leticia Credidio.
                                </p>
                                <p>
                                    Languages: English (US & UK) / French / Greek / Italian
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
                            <div className='item-details'
                                style={{
                                    maxHeight: openItem === 2 ? "32rem" : "0rem",
                                    overflow: "hidden",
                                    transition: "max-height 0.9s ease",
                                }}>
                                <p>
                                    The eyewear giant Luxottica were looking for consultant copywriters to work with their rapidly growing in-house team following the pandemic in 2020. I started working with them in February 2021, providing cross-channel copywriting for multiple brands in the group’s portfolio including Ray-Ban, Sunglass Hut, Vogue Eyewear and LensCrafters.
                                </p>
                                <p>
                                    During the three years I worked with them, I developed multiple campaign concepts, product storytelling, and UX/SEO content across multiple e-commerce sites. I also worked closely with frontend developers and UX designers during UAT phases, supporting agile workflows and tracking progress in Jira/Atlassian. This gave me a taste of cross-functional collaboration between creative and tech teams.                                </p>
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
                            <div className='item-details'
                                style={{
                                    maxHeight: openItem === 3 ? "32rem" : "0rem",
                                    overflow: "hidden",
                                    transition: "max-height 0.9s ease",
                                }}>
                                <p>
                                    In 2016, I worked on a contract providing SEO optimisation services for Microsoft Office Products websites in the UK, Australia and Canada. I worked with a team of specialists at Moravia to conduct keyword research and optimise a wide range of content, including product pages, help articles and tutorials, to boost search performance and improve user experience.                                 </p>
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
        </main>

    )
}

export default About