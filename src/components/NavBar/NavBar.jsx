import './NavBar.css'
import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react"
import { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className="navbar">
                <div className="left-section">
                    <Link to="/" className="home-link">KHILLFRGR</Link>
                </div>

                <div className="right-section">
                    <Link to="/" className="profile-button">Projects</Link>
                    <Link to="/" className="profile-button">About</Link>
                </div>
                <div className="mobile-user-controls">
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(prev => !prev)}
                    >
                        {menuOpen ? <X size={24} color="var(--light-fonts)" /> : <Menu size={24} color="var(--light-fonts)" />}
                    </button>
                </div>
                {menuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-links">
                            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>Projects</Link>
                            <Link to="/" className="mobile-link" onClick={() => setMenuOpen(false)}>About</Link>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default NavBar