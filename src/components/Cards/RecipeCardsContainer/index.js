import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard';
import './styles.css';

const RecipeCardsContainer = ({ cardsInfos, cardType, maxCards }) => {
  const cardTypes = {
    food: {
      image: 'strMealThumb',
      name: 'strMeal',
    },
    drink: {
      image: 'strDrinkThumb',
      name: 'strDrink',
    },
  };

  const cardsToRender = (
    cardsInfos.length <= maxCards - 1
      ? cardsInfos
      : cardsInfos.slice(0, maxCards));

  const { image, name } = cardTypes[cardType];

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="recipe-cards-container"
    >

      {cardsToRender.map((card, index) => (

        <RecipeCard
          key={ index }
          title={ card[name] }
          thumbnail={ card[image] }
          index={ index }
        />
      ))}

    </Grid>
  );
};

RecipeCardsContainer.propTypes = {
  cardsInfos: PropTypes.arrayOf(PropTypes.object),
  cardType: PropTypes.string.isRequired,
  maxCards: PropTypes.number.isRequired,
};

RecipeCardsContainer.defaultProps = {
  cardsInfos: [],
};

export default RecipeCardsContainer;
