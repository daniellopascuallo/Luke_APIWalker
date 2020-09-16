import React from 'react';
import ObiWan from '../images/ObiWan.jpg';

const Error = props => {

    return (
        <div>
            <h1>These aren't the droids you're looking for</h1>
            <img className="img-thumbnail" src={ObiWan} alt="ObiWan"/>
        </div>
    );
}

export default Error;