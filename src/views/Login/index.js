import React, { useState } from 'react'

import person from 'assets/symbolic/person-outline.svg'
import lock from 'assets/symbolic/lock-outline.svg'

import { Content } from 'components/styles/Content'
import {
    Form,
    Heading,
    Wrapper,
    Label,
    InputWrapper,
    IconWrapper,
    Icon,
    Input,
    ForgotButton,
    LoginButton,
    RegisterText,
    RegisterButton,
} from './styles'

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleSubmit = event => {
        event.preventDefault()
        console.log(event.target)
    }
    return (
        <Content alignCenter justifyCenter>
            <Form onSubmit={e => handleSubmit(e)}>
                <Heading>Login</Heading>
                <Wrapper>
                    <Label>Username</Label>
                    <InputWrapper>
                        <IconWrapper>
                            <Icon src={person} />
                        </IconWrapper>
                        <Input
                            type='text'
                            value={formData.username}
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    username: e.target.value,
                                })
                            }
                            placeholder='Type your username'
                        />
                    </InputWrapper>
                </Wrapper>
                <Wrapper>
                    <Label>Password</Label>
                    <InputWrapper>
                        <IconWrapper>
                            <Icon src={lock} />
                        </IconWrapper>
                        <Input
                            type='password'
                            value={formData.password}
                            onChange={e =>
                                setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })
                            }
                            placeholder='Type your password'
                        />
                    </InputWrapper>
                </Wrapper>
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
