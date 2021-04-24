import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'

import FormInput from 'components/atoms/FormInput'

import email from 'assets/symbolic/email-outline.svg'
import lock from 'assets/symbolic/lock-outline.svg'

import { signIn } from 'api/user'

import { Content } from 'components/styles/Content'
import {
    Form,
    Heading,
    ForgotButton,
    LoginButton,
    RegisterText,
    RegisterButton,
} from './styles'

const Login = () => {
    const { addToast } = useToasts()
    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = event => {
        event.preventDefault()
        dispatch(signIn(formData, history, addToast))
    }

    return (
        <Content alignCenter justifyCenter>
            <Form onSubmit={e => handleSubmit(e)}>
                <Heading>Login</Heading>
                <FormInput
                    type='email'
                    label='Email'
                    image={email}
                    value={formData.username}
                    onChange={e =>
                        setFormData({
                            ...formData,
                            email: e.target.value,
                        })
                    }
                    placeholder='Type your email'
                />
                <FormInput
                    type='password'
                    label='Password'
                    image={lock}
                    value={formData.password}
                    onChange={e =>
                        setFormData({
                            ...formData,
                            password: e.target.value,
                        })
                    }
                    placeholder='Type your username'
                />

                <ForgotButton type='button'>
                    Forgot password?
                </ForgotButton>
                <LoginButton>LOGIN</LoginButton>
                <RegisterText>
                    Don&apos;t have an account?{' '}
                    <RegisterButton>Sign up!</RegisterButton>
                </RegisterText>
            </Form>
        </Content>
    )
}

export default Login
