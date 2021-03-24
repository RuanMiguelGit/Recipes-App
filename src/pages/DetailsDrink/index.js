import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Grid,
  Card,
  CardContent,
  // CardMedia,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
} from '@material-ui/core';
import {
  Share as ShareIcon,
  Favorite as FavoriteIcon,
} from '@material-ui/icons';
import RecomendationsCarousel from '../../components/RecomendationsCarousel';

import './styles.css';

const DetailsDrink = () => {
  const NUMBER_OF_RECOMENDATIONS = 6;
  const { id } = useParams();
  const location = useLocation();
  const locationPath = location.pathname.replace(/\/(\w+)\/(.+)/, '$1');

  const [receipeDetails, setReceipeDetails] = useState('');
  const [recomendations, setRecomendations] = useState([]);

  const receipeDetailsURL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const mealsURL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

  const fetchData = async (url, callback) => {
    const results = await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
    callback(results);
  };

  useEffect(() => {
    fetchData(receipeDetailsURL, (results) => setReceipeDetails(results.drinks[0]));
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
  console.log(receipeDetails);

  const ingredientsList = () => {
    const MAX_NUMBER_OF_INGREDIENTS = 20;
    const arrayOfIngredients = [];
    for (let index = 1; index <= MAX_NUMBER_OF_INGREDIENTS; index += 1) {
      arrayOfIngredients.push(
        {
          ingredient: receipeDetails[`strIngredient${index}`],
          measure: receipeDetails[`strMeasure${index}`],
        },
      );
    }
    const filtered = arrayOfIngredients.filter((prop) => prop.ingredient);
    return filtered;
  };

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item className="gridContainer">
        {receipeDetails
          ? (
            <Card className="cardContainer">
              <CardContent className="contentContainer">
                <img
                  src={ receipeDetails.strDrinkThumb }
                  alt={ receipeDetails.idDrink }
                  data-testid="recipe-photo"
                />
                {/* <CardMedia
                  className="mediaImg"
                  image={ receipeDetails.strDrinkThumb }
                  data-testid="recipe-photo"
                /> */}
                <Typography data-testid="recipe-title">
                  {receipeDetails.strDrink}
                </Typography>
                <Typography data-testid="recipe-category">
                  {receipeDetails.strAlcoholic}
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
                  {receipeDetails.strInstructions}
                </Typography>
                <Button
                  variant="contained"
                  data-testid="start-recipe-btn"
                >
                  Iniciar receita
                </Button>
                { recomendations
                  ? <RecomendationsCarousel recomendations={ recomendations } />
                  : <p>Loading</p> }
              </CardContent>
            </Card>)
          : <p>Loading</p> }
      </Grid>
    </Grid>
  );
};

export default DetailsDrink;
