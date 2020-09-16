import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import People from './People';
import Planet from './Planet';
import Error from './Error';

const Swapi = props => {

    const [ people, setPeople ] = useState(null);
    const [ planet, setPlanet ] = useState(null);
    const [ error, setError ] = useState(null);
    
    // consuming API: call with useEffect and variable props in second argument, with Axios. Detect selection and get response and store it based on this selection
    useEffect( () => {
        Axios.get(`https://swapi.dev/api/${props.selection}/${props.id}`)
            // .then(response => console.log(response.data))
            .then(response => {
                if(props.selection === "people"){
                    setPeople(response.data);
                    setPlanet(null);
                    setError(null);
                }
                else if(props.selection === "planets"){
                    setPlanet(response.data);
                    setPeople(null);
                    setError(null);
                }
            })
            .catch(err => {
                // console.log(err);
                setError(err);
                setPeople(null);
                setPlanet(null);
            })
    }, [props]) 

    return (
        <div>
            {
                people ? <People people={people} /> : null
            }
            {
                planet ? <Planet planet={planet} /> : null
            }
            {
                error ? <Error /> : null
            }
        </div>
    );
}

export default Swapi;
