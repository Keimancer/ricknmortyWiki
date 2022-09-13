import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import { useEffect } from 'react';
import Character from './components/Character';
import header from './assets/header.png';
import title from './assets/title.png';

function App() {

  const [ location, setLocation ] = useState({}); // State in charge of consuming location endpoint
  const [ locationId, setLocationId ] = useState(""); // State in charge of getting input value

  useEffect(() => {
    const randomId = Math.floor( Math.random() * 126 ) + 1;
    axios.get( `https://rickandmortyapi.com/api/location/${ randomId }/` )
      .then( res => setLocation( res.data ) )
  }, []); // First random load of a location through API consume

  const searchLocation = () => {
    axios.get( `https://rickandmortyapi.com/api/location/${ locationId }/` )
      .then( res => setLocation( res.data ) )
  }; // Function to consume a new location endpoint when search button is clicked

  return (
    <div className="App">
      <div id="header">
        <img src={ title } alt="" id="title" />
      </div>
      <div id="top-text">
        <h1>Rick and Morty Wiki</h1>
        <div id="searcher">
          <input 
            type="text"
            value={ locationId }
            placeholder="Type here a number between 1-126"
            onChange= { e => setLocationId( e.target.value ) } 
            />
          <button onClick={ searchLocation } >Search</button>
        </div>
      </div>
      <div id="location">
        <h2>{ location.name }</h2>
        <div className="location-atts">
          <p><b>Type:</b> { location.type }</p>
          <p><b>Dimension:</b> { location.dimension }</p>
          <p><b>Residents:</b> { location.residents?.length }</p>
        </div>
      </div>
      <ul>
        {
          location.residents?.map( url => (
            <li key={ url }>
              <Character url={ url } />
            </li>
          ) )
        }
      </ul>
      <hr id="division" />
      <div className="footer">
        <h6>José Javier C. Rojas, hecho en Academlo</h6>
      </div>
    </div>
  )
}

export default App
