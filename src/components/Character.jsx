import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';

const Character = ({ url }) => {

    const [ character, setCharacter ] = useState({});

    useEffect(() => {
        axios.get( url )
            .then( res => setCharacter( res.data ) )
    }, [])

    return (
        <div className="character-box" >
            <img src={ character.image } alt="" className="char-img" />
            <h3>{ character.name }</h3>
            <hr />
            <h6>ESTADO Y RAZA</h6>
            <h4>{ character.status } - { character.species }</h4>
            <h6>Origin:</h6>
            <h4>{ character.origin?.name }</h4>
            <h6>Episodes where they appear:</h6>
            <h4>{ character.episode?.length }</h4>
        </div>
    );
};

export default Character;