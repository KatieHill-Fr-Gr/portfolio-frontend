import './Contact.css'

import { Link } from 'react-router-dom'

const Contact = () => {
    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        {/* <div className="notfound-image">
            {/* <img src={eyeIcon} alt="White silhouette of eye" /> */}
                        {/* </div> */}
                        <h1> Oops, page not found</h1>
                        <p>We can't find the page you were looking for.</p>
                        <Link to="/projects" className="page-button">Go back to projects</Link>
                    </div>
                </div>
            </section>
        </main>
    )

}


export default Contact