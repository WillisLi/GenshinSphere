import React from 'react';
import useQueryImage from 'hooks/useQueryImage';

function Image({index, cat, name, type}) {
    const { data, status } = useQueryImage(cat, name, type);

    return (
        <>
            {status === 'success' && <img src = {data} alt = {`${name}-${type}`} key = {index}/>}
        </>
    )
}

export default Image;
