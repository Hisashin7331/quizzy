import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { categories } from 'constants/categories'

import filter from 'assets/symbolic/filter.svg'
import submit from 'assets/navigation/submit.svg'

import {
    Wrapper,
    Input,
    Filter,
    Submit,
    Dropdown,
    StyledNavLink,
    HRWrapper,
    HR,
    Heading,
} from './styles'

const Search = ({ value, setValue }) => {
    const [isOpened, setIsOpened] = useState(false)

    const history = useHistory()

    const handleSubmit = e => {
        e.preventDefault()

        history.push(`/browse/search?query=${value}`)
    }

    return (
        <Wrapper onSubmit={e => handleSubmit(e)}>
            <Input
                type='text'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <Submit>
                <img src={submit} alt='submit icon' />
            </Submit>
            <Filter onClick={() => setIsOpened(!isOpened)}>
                <img src={filter} alt='filter icon' />
            </Filter>
            <Dropdown isOpened={isOpened}>
                <ul>
                    <HRWrapper>
                        <HR />
                        <Heading>Pages</Heading>
                    </HRWrapper>
                    <li>
                        <StyledNavLink exact to='/browse'>
                            Most popular
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink exact to='/browse/recent'>
                            Recently created
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink exact to='/browse/foryou'>
                            Choosen for you
                        </StyledNavLink>
                    </li>
                    <HRWrapper>
                        <HR />
                        <Heading>Categories</Heading>
                    </HRWrapper>
                    {categories.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </Dropdown>
        </Wrapper>
    )
}

export default Search

Search.propTypes = {
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired,
}

Search.defaultProps = {
    value: '',
}
