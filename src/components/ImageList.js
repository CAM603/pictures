import React from 'react';
import ImageCard from './ImageCard';

import './ImageList.css';

const ImageList = (props) => {
    const { images } = props;
    const pics = images.map(image => {
        return <ImageCard key={image.id} image={image} />
    })
    return (
        <div className="image-list">
            {pics}
        </div>
    )
}

export default ImageList; 