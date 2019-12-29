import React from 'react';

const ImageList = (props) => {
    const { images } = props;
    const pics = images.map(({id, urls, description }) => {
        return <img key={id} src={urls.small} alt={description} />
    })
    return (
        <div>
            {pics}
        </div>
    )
}

export default ImageList; 