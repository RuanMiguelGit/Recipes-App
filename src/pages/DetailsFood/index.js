/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Button,
} from '@material-ui/core';
import {
  Share as ShareIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import RecomendationsCarousel from '../../components/RecomendationsCarousel';
import { checkDoneRecipes, checkProgressRecipes } from '../../services/localStorage';

import './styles.css';

const DetailsFood = () => {
  const NUMBER_OF_RECOMENDATIONS = 6;
  const { id } = useParams();
  const location = useLocation();
  const locationPath = location.pathname.replace(/\/(\w+)\/(.+)/, '$1');

  const [recipeDetails, setRecipeDetails] = useState('');
  const [recomendations, setRecomendations] = useState([]);
  const [bottomButtonText, setBottomButtonText] = useState('Iniciar receita');

  const recipeDetailsURL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const fetchData = async (url, callback) => {
    const results = await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
    callback(results);
  };

  useEffect(() => {
    fetchData(recipeDetailsURL, (results) => setRecipeDetails(results.meals[0]));
  }, []);
  useEffect(() => {
    switch (locationPath) {
    case 'comidas':
      fetchData(drinksURL, (results) => setRecomendations(
        results.drinks.slice(0, NUMBER_OF_RECOMENDATIONS),
      ));
      break;
    case 'bebidas':
      fetchData(mealsURL, (results) => setRecomendations(
        results.meals.slice(0, NUMBER_OF_RECOMENDATIONS),
      ));
      break;
    default:
      break;
    }
  }, []);
  useEffect(() => {
    if (checkDoneRecipes('food', id)) setBottomButtonText('');
    else if (checkProgressRecipes('food', id)) setBottomButtonText('Continuar Receita');
  }, []);

  const ingredientsList = () => {
    const MAX_NUMBER_OF_INGREDIENTS = 20;
    const arrayOfIngredients = [];
    for (let index = 1; index <= MAX_NUMBER_OF_INGREDIENTS; index += 1) {
      arrayOfIngredients.push(
        {
          ingredient: recipeDetails[`strIngredient${index}`],
          measure: recipeDetails[`strMeasure${index}`],
        },
      );
    }
    const filtered = arrayOfIngredients.filter((prop) => prop.ingredient);
    return filtered;
  };

  const embedVideoLink = (link) => {
    const videoId = link.split('v=')[1];
    const embedSrc = `https://www.youtube.com/embed/${videoId}`;
    return embedSrc;
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={ 12 }>
        {(recipeDetails && recomendations)
          ? (
            <Card>
              <CardContent>
                <img
                  src={ recipeDetails.strMealThumb }
                  alt={ recipeDetails.idMeal }
                  data-testid="recipe-photo"
                />
                <Typography data-testid="recipe-title">
                  {recipeDetails.strMeal}
                </Typography>
                <Typography data-testid="recipe-category">
                  {recipeDetails.strCategory}
                </Typography>
                <IconButton
                  aria-label="add to favorites"
                  data-testid="favorite-btn"
                >
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  aria-label="share"
                  data-testid="share-btn"
                >
                  <ShareIcon />
                </IconButton>
                <List>
                  { ingredientsList().map((ingredientAndMeasure, index) => (
                    <ListItem key={ index }>
                      <ListItemText
                        primary={ ingredientAndMeasure.ingredient }
                        secondary={ ingredientAndMeasure.measure }
                        data-testid={ `${index}-ingredient-name-and-measure` }
                      />
                    </ListItem>
                  ))}
                </List>
                <Typography data-testid="instructions">
                  {recipeDetails.strInstructions}
                </Typography>
                <CardMedia
                  component="iframe"
                  src={ embedVideoLink(recipeDetails.strYoutube) }
                  data-testid="video"
                />
                { recomendations
                  ? <RecomendationsCarousel recomendations={ recomendations } />
                  : <p>Loading</p> }
                {bottomButtonText
                  ? (
                    <AppBar
                      data-testid="start-recipe-btn"
                      position="fixed"
                      color="primary"
                      style={ { top: 'auto', bottom: 0 } }
                    >
                      <Button
                        variant="contained"
                      >
                        {bottomButtonText}
                      </Button>
                    </AppBar>)
                  : null}
              </CardContent>
            </Card>)
          : <p>Loading</p> }
      </Grid>
    </Grid>
  );
};

export default DetailsFood;
