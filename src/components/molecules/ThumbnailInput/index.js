import React, { useState } from 'react'
import PropTypes from 'prop-types'

import upload from 'assets/icons/upload.svg'

import {
    FileInput,
    FileLabel,
    Thumbnail,
    Preview,
    Placeholder,
} from './styles'

const ThumbnailInput = ({ setThumbnail }) => {
    const [image, setImage] = useState(null)

    const previewImage = event => {
        setThumbnail(event.target.files[0])
        setImage(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <Thumbnail>
            <Placeholder>Thumbnail</Placeholder>
            <FileLabel isImageSet={image}>
                <img src={upload} alt='upload file' />
                <FileInput onChange={e => previewImage(e)} />
            </FileLabel>
            {image && <Preview src={image} />}
        </Thumbnail>
    )
}

export default ThumbnailInput

ThumbnailInput.propTypes = {
    setThumbnail: PropTypes.func.isRequired,
}
