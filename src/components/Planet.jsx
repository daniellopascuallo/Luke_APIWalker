import React from 'react';

const Planet = props => {
    const { planet } = props;

    return (
        <div>
            <h1>{planet.name}</h1>
            <ul className="list-group col-5 mx-auto">
                <li className="list-group-item font-weight-bold">Climate: {planet.climate}</li>
                <li className="list-group-item font-weight-bold">Terrain: {planet.terrain}</li>
                <li className="list-group-item font-weight-bold">Surface Water: {planet.surface_water}</li>
                <li className="list-group-item font-weight-bold">Population: {planet.population}</li>
            </ul>
        </div>
    );
}

export default Planet;