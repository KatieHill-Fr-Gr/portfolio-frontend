import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'


import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <h1> Fancy a chat?</h1>
                        <p>I never say no to a coffee. Send me a message if you want to arrange a call or meet in person.</p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )

}


export default Contact