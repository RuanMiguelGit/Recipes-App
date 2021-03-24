import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import {
//   RadioButtonUnchecked,
//   RadioButtonChecked,
// } from '@material-ui/icons';

import './styles.css';

const RecomendationsCarousel = ({ recomendations }) => {
  const LENGTH_OF_RECOMENDATIONS = 6;
  const [current, setCurrent] = useState([0, 1]);

  useEffect(() => {}, [current]);

  const prevSlide = () => {
    setCurrent(current.map((item) => (
      item === 0
        ? LENGTH_OF_RECOMENDATIONS - 1
        : item - 1
    )));
  };

  const nextSlide = () => {
    setCurrent(current.map((item) => (
      item === LENGTH_OF_RECOMENDATIONS - 1
        ? 0
        : item + 1
    )));
  };

  return (
    <section>
      <div className="container">
        <button
          className="flow-btns"
          type="button"
          onClick={ prevSlide }
        >
          PREV
        </button>
        {recomendations
          ? recomendations.map((receipe, index) => (
            <div
              className={ `${current.includes(index) ? 'active' : ''} slide` }
              key={ receipe.idDrink ? receipe.idDrink : receipe.strMeal }
              data-testid={ `${index}-recomendation-card` }
            >
              <img
                src={ receipe.strDrinkThumb
                  ? receipe.strDrinkThumb
                  : receipe.strMealThumb }
                alt={ receipe.strDrink ? receipe.strDrink : receipe.strMeal }
              />
              <h2
                data-testid={ `${index}-recomendation-title` }
              >
                { receipe.strGlass ? receipe.strGlass : receipe.strMeal }
              </h2>
            </div>
          ))
          : <p>Loading</p> }
        <button
          className="flow-btns"
          type="button"
          onClick={ nextSlide }
        >
          NEXT
        </button>
      </div>
    </section>
  );
};

RecomendationsCarousel.propTypes = {
  recomendations: PropTypes.arrayOf().isRequired,
};

export default RecomendationsCarousel;
