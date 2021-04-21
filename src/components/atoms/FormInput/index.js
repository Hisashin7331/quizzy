import React from 'react'
import PropTypes from 'prop-types'

import {
    Wrapper,
    Label,
    InputWrapper,
    IconWrapper,
    Icon,
    Input,
} from './styles'

const FormInput = ({
    type,
    label,
    placeholder,
    image,
    value,
    onChange,
}) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper>
                {image && (
                    <IconWrapper>
                        <Icon src={image} />
                    </IconWrapper>
                )}
                <Input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                />
            </InputWrapper>
        </Wrapper>
    )
}

export default FormInput

FormInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
}

FormInput.defaultProps = {
    type: 'text',
}
