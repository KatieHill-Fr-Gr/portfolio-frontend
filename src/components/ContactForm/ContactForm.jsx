import './ContactForm.css'

import { useState } from 'react'

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [submitted, setSubmitted] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async () => {
        setLoading(true)
        setError('')

        try {
            const response = await fetch('http://localhost:8000/api/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })

            const data = await response.json()

            if (response.ok) {
                setSubmitted(true)
            } else {
                setError(data.message || 'Something went wrong')
            } 
        } catch (err) {
            setError('Failed to send message')
        } finally {
                setLoading(false)
            }
        }


    return (
        <>

        </>
    )

}


export default ContactForm