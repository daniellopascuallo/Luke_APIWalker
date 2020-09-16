import React from 'react';

const People = props => {
    const { people } = props;

    return (
        <div>
            <h1>{people.name}</h1>
            <ul className="list-group col-5 mx-auto">
                <li className="list-group-item font-weight-bold">Height: {people.height}</li>
                <li className="list-group-item font-weight-bold">Mass: {people.mass}</li>
                <li className="list-group-item font-weight-bold">Hair Color: {people.hair_color}</li>
                <li className="list-group-item font-weight-bold">Sking Color: {people.skin_color}</li>
                {/* <li className="list-group-item font-weight-bold">Homeworld: {people.homeworld}</li> */}
            </ul>
        </div>
    );
}

export default People;