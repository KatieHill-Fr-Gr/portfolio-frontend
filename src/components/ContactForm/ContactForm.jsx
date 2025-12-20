import './ContactForm.css'

import { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target 
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = () => {
        setSubmitted(true)
    }


    return (
        <>

        </>
    )

}


export default ContactForm