import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'


import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <h1> Get in touch</h1>
                        <p>Fill in the form below or email me: khill.fr.gr@gmail.com</p>
                        <Link to="/projects" className="page-button">Go back to home</Link>
                    </div>
                </div>
            </section>
        </main>
    )

}


export default Contact