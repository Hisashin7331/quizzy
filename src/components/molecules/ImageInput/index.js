/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import upload from 'assets/icons/upload.svg'

import { FileInput, FileLabel, Image, Placeholder } from './styles'

const ImageInput = ({ image, setImage, rounded }) => {
    const [previewedImage, setPreviewedImage] = useState()
    useEffect(() => {
        setPreviewedImage(image)
    }, [])
    const previewImage = event => {
        setImage(event.target.files[0])
        setPreviewedImage(event.target.files[0])
    }

    return (
        <Image
            rounded={rounded}
            image={
                previewedImage && URL.createObjectURL(previewedImage)
            }
        >
            {!previewedImage && (
                <Placeholder>
                    {rounded ? 'Avatar' : 'Thumbnail'}
                </Placeholder>
            )}
            <FileLabel isImageSet={previewedImage}>
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
    image: PropTypes.objectOf(PropTypes.string),
}
ImageInput.defaultProps = {
    rounded: false,
    image: null,
}
