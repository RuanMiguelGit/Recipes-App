import {
  Card, CardContent, CardMedia, Chip, Grid, IconButton, Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import shareIcon from '../../images/shareIcon.svg';

const Recipe = ({ recipe, index }) => {
  const { name, type, area, category, image, doneDate, tags, alcoholicOrNot } = recipe;

  const topText = () => {
    if (type === 'comida') {
      if (category && area) return `${area} - ${category}`;
      if (category) return `${category}`;
      return `${area}`;
    }
    return `${alcoholicOrNot}`;
  };

  const nameAndCategoryComponent = () => (
    <Grid item xs={ 10 }>
      <Typography
        variant="body2"
        data-testid={ `${index}-horizontal-top-text` }
        color="textSecondary"
        gutterBottom
      >
        { `${topText()}` }
      </Typography>
      <Typography
        variant="body1"
        data-testid={ `${index}-horizontal-name` }
        color="textPrimary"
        gutterBottom
      >
        { `${name}` }
      </Typography>
    </Grid>
  );

  const shareIconComponent = () => (
    <Grid item xs={ 2 }>
      <IconButton onClick={ () => {} }>
        <img
          src={ shareIcon }
          alt="share icon"
          data-testid={ `${index}-horizontal-share-btn` }
        />
      </IconButton>
    </Grid>
  );

  return (
    <Grid item xs={ 12 } sm={ 6 } md={ 4 } lg={ 3 }>
      <Card style={ { display: 'flex' } }>
        <CardMedia
          data-testid={ `${index}-horizontal-image` }
          component="img"
          image={ image }
          title={ name }
          style={ { maxWidth: '50%' } }
        />
        <CardContent className="done-recipe-content">
          <Grid container justify="space-around">
            { nameAndCategoryComponent() }
            { shareIconComponent() }
          </Grid>
          <Typography variant="body2" data-testid={ `${index}-horizontal-done-date` }>
            { `Feita em: ${doneDate}` }
          </Typography>
          <Grid container wrap="wrap">
            { tags.filter((tag, tagIndex) => tagIndex < 2)
              .map((tag) => (
                <Chip
                  key={ tag }
                  label={ tag }
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  style={ { margin: '6px 6px 0 0' } }
                />
              )) }
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    alcoholicOrNot: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default Recipe;
