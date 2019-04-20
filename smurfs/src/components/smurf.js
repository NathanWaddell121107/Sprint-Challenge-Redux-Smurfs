import React from 'react';

const Smurf = props => {
    return(
        <ul className='smurfCard'>
            <p>{props.name}</p>
            <p>{props.age}</p>
            <p>{props.height}</p>
        </ul>
    )
}

export default Smurf;