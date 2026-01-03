import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'


import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <h1> Let's work together</h1>
                        <p>If you'd like to find out more about my work, send me a message to arrange a call or meet up in person.</p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )

}


export default Contact