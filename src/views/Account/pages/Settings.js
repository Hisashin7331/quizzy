import React, { useState } from 'react'
import { useToasts } from 'react-toast-notifications'
import { updateUser } from 'api/user'

import { Wrapper, Heading, Form, Input, Submit } from './styles'

const Settings = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { addToast } = useToasts()

    const handleSubmit = e => {
        e.preventDefault()
        if (username && username.length < 8) {
            addToast('Username must be at least 8 characters long', {
                appearance: 'warning',
            })
            return
        }
        updateUser({
            email,
            username,
            password,
        })
    }

    return (
        <Wrapper>
            <Heading>Settings</Heading>
            <Form justifyLeft onSubmit={handleSubmit}>
                <Input
                    type='email'
                    placeholder='Update email'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <Input
                    type='text'
                    placeholder='Update username'
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    min='8'
                    max='64'
                />
                <Input
                    type='password'
                    placeholder='Update password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <Submit>Submit</Submit>
            </Form>
        </Wrapper>
    )
}

export default Settings
