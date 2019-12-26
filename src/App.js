import React from 'react';
import PropTypes from "prop-types"

function Food({name, image, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h2> {image} </h2>
  </div>;
}

const fav = [
  {
    id : 1,
    name : "kimchi",
    image : "CCCC",
  },
  {
    id : 2,
    name : "gogi",
    image : "DDDD",
  }
];

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

function App() {
  return (
    <div>
      {fav.map(dish => (
        <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating} />
        ))
      }
    </div>
    );
}

export default App;
