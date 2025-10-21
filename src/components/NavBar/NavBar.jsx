import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="left-section">
                    {/* <div className="logo-image">
                        <img src={eyeIcon} alt="White silhouette of eye" />
                    </div> */}
                    <Link to="/" className="home-link">KHILLFRGR</Link>
                </div>

                <div className="center-section">
                    <Link to="/" className="profile-button">Projects</Link>
                    <Link to="/" className="profile-button">About</Link>
                </div>
            </nav>
        </>
    )
}

export default NavBar