import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { useToasts } from 'react-toast-notifications'

import {
    Wrapper,
    Heading,
    Form,
    EmailInput,
    TextArea,
    Submit,
} from './styles'

const Support = () => {
    const { addToast } = useToasts()
    const [form, setForm] = useState({
        email: '',
        message: '',
    })

    const handleSubmit = e => {
        e.preventDefault()

        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form,
                process.env.REACT_APP_USER_ID,
            )
            .then(
                () => {
                    setForm({
                        email: '',
                        message: '',
                    })
                    addToast('Message has been sent!', {
                        appearance: 'success',
                    })
                },
                error => {
                    addToast(
                        `Unexpected error occured :( ${error.text}`,
                        { appearance: 'error' },
                    )
                },
            )
    }

    return (
        <Wrapper>
            <Heading>Support</Heading>
            <Form onSubmit={handleSubmit}>
                <EmailInput
                    value={form.email}
                    onChange={e =>
                        setForm({
                            ...form,
                            email: e.target.value,
                        })
                    }
                />
                <TextArea
                    value={form.message}
                    onChange={e =>
                        setForm({
                            ...form,
                            message: e.target.value,
                        })
                    }
                />
                <Submit>Submit</Submit>
            </Form>
        </Wrapper>
    )
}

export default Support
