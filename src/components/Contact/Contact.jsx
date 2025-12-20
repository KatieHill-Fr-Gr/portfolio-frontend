import './Contact.css'
import ContactForm from '../ContactForm/ContactForm'


import { Link } from 'react-router-dom'

const Contact = () => {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="page-content">
                        <h1> Fancy a coffee?</h1>
                        <p>Send me a message below or email me: khill.fr.gr@gmail.com</p>
                        <ContactForm />
                    </div>
                </div>
            </section>
        </main>
    )

}


export default Contact