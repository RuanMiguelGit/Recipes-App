import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import RecipeCard from '../RecipeCard';

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
  console.log(cardsInfos);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
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
  cardsInfos: PropTypes.arrayOf.isRequired,
  cardType: PropTypes.string.isRequired,
  maxCards: PropTypes.number.isRequired,
};

export default RecipeCardsContainer;
