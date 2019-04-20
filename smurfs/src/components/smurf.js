import React from 'react';

const Smurf = props => {
    return(
        <ul>
            <li>{props.name}</li>
            <li>{props.age}</li>
            <li>{props.height}</li>
        </ul>
    )
}

export default Smurf;