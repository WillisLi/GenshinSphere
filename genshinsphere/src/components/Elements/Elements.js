import React from 'react';
import useQueryList from 'hooks/useQueryList';
import ElementLink from './ElementLink';
import './Elements.scss';

const Elements = () => {
    const { data, status } = useQueryList('elements');
    
    return (
        <div className = "page">
            <h1>Teyvat's Seven Elements</h1>
            <div className = "elementCircle">
                {status === 'success' && data.map((element, index) => (
                    <ElementLink index = {index} name = {element}/>
                ))}
            </div>
        </div>
    )
}

export default Elements
