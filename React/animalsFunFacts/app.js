import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';


const title = '';
const showBackground = true;

const background = <img alt="ocean" className="background" src="/images/ocean.jpg"/>

// display fact event
function displayFact(e) {
  const nameAnimal = e.target.alt;
  // choose a random fact
  let index = Math.floor(Math.random()* animals[nameAnimal].facts.length);
  const funFact = animals[nameAnimal].facts[index];
  document.getElementById('fact').innerHTML = funFact
}

let images = [];
// make an array of the images of the animals
for (let animal in animals) {
  images.push(<img 
  key={animal} 
  className='animal' 
  alt={animal} 
  src={animals[animal].image} 
  ariaLabel={animal}
  role='button' 
  onClick={displayFact} />);
}

// for title we can also use : {title || 'Click on an animal for a fun fact' }
const animalFacts = (
  <div>
  {showBackground && background}
    <p id="fact">
    </p>
    <div className="animals">
      {images}
    </div>
    <h1>{title == "" ? "Click on an animal for a fun fact" : title}</h1>
  </div>)


ReactDOM.render(animalFacts, document.getElementById('root'))

