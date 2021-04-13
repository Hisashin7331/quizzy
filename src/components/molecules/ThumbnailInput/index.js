import React, { useState } from 'react'

import upload from 'assets/icons/upload.svg'

import { FileInput, FileLabel, Thumbnail, Preview } from './styles'

const ThumbnailInput = () => {
    const [image, setImage] = useState(null)

    const previewImage = event => {
        setImage(URL.createObjectURL(event.target.files[0]))
    }
    return (
        <Thumbnail>
            <FileLabel isImageSet={image}>
                <img src={upload} alt='upload file' />
                <FileInput onChange={e => previewImage(e)} />
            </FileLabel>
            {image && <Preview src={image} />}
        </Thumbnail>
    )
}

export default ThumbnailInput
