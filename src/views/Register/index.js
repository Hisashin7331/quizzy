import React, { useState, createContext, useContext } from 'react'
import PropTypes from 'prop-types'

import FormInput from 'components/atoms/FormInput'
import ImageInput from 'components/molecules/ImageInput'

import person from 'assets/symbolic/person-outline.svg'
import lock from 'assets/symbolic/lock-outline.svg'
import questionMarks from 'assets/images/question-marks.jpg'

import { Content } from 'components/styles/Content'
import {
    FormStyled,
    Side,
    Background,
    Frame,
    Heading,
    Button,
    Wrapper,
    Categories,
    Category,
    Radio,
    Label,
} from './styles'

const Context = createContext({
    index: 0,
    setIndex: () => {},
    username: '',
    setUsername: () => {},
    password: '',
    setPassword: () => {},
    avatar: '',
    setAvatar: () => {},
    email: '',
    setEmail: () => {},
    categories: [],
    setCategories: () => {},
})

const Form = ({ children }) => {
    const { index } = useContext(Context)
    const handleSubmit = event => {
        event.preventDefault()
    }
    return (
        <FormStyled onSubmit={e => handleSubmit(e)}>
            <Side>
                <span />
                <Background src={questionMarks} />
                <Frame>
                    Create your free account and join our community!
                </Frame>
            </Side>
            <Side form='true'>
                {children[index] ? (
                    children[index]
                ) : (
                    <h1>An error occured</h1>
                )}
            </Side>
        </FormStyled>
    )
}

const Registration = () => {
    const {
        setIndex,
        password,
        setPassword,
        email,
        setEmail,
    } = useContext(Context)
    return (
        <>
            <Heading>Register</Heading>
            <FormInput
                type='email'
                label='Email'
                placeholder='Set your email'
                image={person}
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <FormInput
                type='password'
                label='Password'
                placeholder='Set your password'
                image={lock}
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <Wrapper>
                <div style={{ width: '50%' }} />
                <div style={{ width: '50%' }}>
                    <Button
                        type='button'
                        onClick={() => setIndex(1)}
                        disabled={!!(!password || !email)}
                    >
                        Next
                    </Button>
                </div>
            </Wrapper>
        </>
    )
}

const Details = () => {
    const {
        username,
        setUsername,
        setIndex,
        setAvatar,
        avatar,
    } = useContext(Context)
    return (
        <>
            <Heading>Account</Heading>
            <ImageInput rounded setImage={setAvatar} image={avatar} />
            <FormInput
                type='text'
                label='Username'
                placeholder='Set your username'
                image={person}
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <Wrapper>
                <div style={{ width: '50%' }}>
                    <Button type='button' onClick={() => setIndex(0)}>
                        Previous
                    </Button>
                </div>
                <div style={{ width: '50%' }}>
                    <Button type='button' onClick={() => setIndex(2)}>
                        Next
                    </Button>
                </div>
            </Wrapper>
        </>
    )
}

const Preferences = () => {
    const { setIndex, categories, setCategories } = useContext(
        Context,
    )

    const categoriesList = [
        'IT',
        'Art',
        'Music',
        'Movies',
        'TV Series',
        'World',
    ]

    const handleChange = item => {
        const newCategories = categories
        const index = newCategories.indexOf(item)
        if (index !== -1) {
            newCategories.splice(index, 1)
        } else {
            newCategories.push(item)
        }
        setCategories(newCategories)
        console.log(categories)
    }

    return (
        <>
            <Heading>Preferences</Heading>
            <h6 style={{ marginTop: 0 }}>Choose at least one</h6>
            <Categories>
                {categoriesList.map(item => (
                    <Category
                        key={item}
                        isChecked={categories.indexOf(item) !== -1}
                    >
                        <Radio onChange={() => handleChange(item)} />
                        <Label>{item}</Label>
                    </Category>
                ))}
            </Categories>
            <Wrapper>
                <div style={{ width: '50%' }}>
                    <Button type='button' onClick={() => setIndex(1)}>
                        Previous
                    </Button>
                </div>
                <div style={{ width: '50%' }}>
                    <Button type='submit'>Submit</Button>
                </div>
            </Wrapper>
        </>
    )
}

const Register = () => {
    const [index, setIndex] = useState(0)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [avatar, setAvatar] = useState()
    const [email, setEmail] = useState('')
    const [categories, setCategories] = useState([])
    return (
        <Content alignCenter justifyCenter>
            <Context.Provider
                value={{
                    index,
                    setIndex,
                    username,
                    setUsername,
                    password,
                    setPassword,
                    avatar,
                    setAvatar,
                    email,
                    setEmail,
                    categories,
                    setCategories,
                }}
            >
                <Form>
                    <Registration />
                    <Details />
                    <Preferences />
                </Form>
            </Context.Provider>
        </Content>
    )
}

export default Register

Form.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
}
