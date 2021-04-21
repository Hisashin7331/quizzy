/* eslint-disable react/forbid-prop-types */
import React from 'react'
import PropTypes from 'prop-types'

import upload from 'assets/icons/upload.svg'

import { FileInput, FileLabel, Image, Placeholder } from './styles'

const ImageInput = ({ image, setImage, rounded }) => {
    const previewImage = event => {
        setImage(event.target.files[0])
    }

    return (
        <Image
            rounded={rounded}
            image={image && URL.createObjectURL(image)}
        >
            {!image && (
                <Placeholder>
                    {rounded ? 'Avatar' : 'Thumbnail'}
                </Placeholder>
            )}
            <FileLabel isImageSet={image}>
                <img src={upload} alt='upload file' />
                <FileInput onChange={e => previewImage(e)} />
            </FileLabel>
        </Image>
    )
}

export default ImageInput

ImageInput.propTypes = {
    rounded: PropTypes.bool,
    setImage: PropTypes.func.isRequired,
    image: PropTypes.arrayOf(PropTypes.string),
}
ImageInput.defaultProps = {
    rounded: false,
    image: null,
}
