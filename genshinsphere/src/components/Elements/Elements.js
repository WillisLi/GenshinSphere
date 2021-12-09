import React from 'react';
import { useQueryList } from '../../hooks/useQueryList';
import './Elements.css';

const Elements = () => {
    const { data, status } = useQueryList('elements');
    
    return (
        <div className = "elementList">
            {status === 'success' && <div>
                
            </div>}
        </div>
    )
}

export default Elements
