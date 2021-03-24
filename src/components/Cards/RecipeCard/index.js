import {
  Card, CardActionArea, CardContent, CardMedia, Grid, Typography,
} from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
// import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

const RecipeCard = ({ title, thumbnail, index, clickRedirectPath }) => (
  <Grid item xs={ 6 }>
    {/* {redirect && <Redirect to={ clickRedirectPath } />} */}
    <Link to={ clickRedirectPath }>
      <Card
        data-testid={ `${index}-recipe-card` }
        className="recipe-card"
      >
        <CardActionArea>
          <CardMedia
            data-testid={ `${index}-card-img` }
            component="img"
            image={ thumbnail }
            src={ thumbnail }
            title={ title }
          />
        </CardActionArea>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            data-testid={ `${index}-card-name` }
          >
            {title}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  </Grid>
);
RecipeCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
export default RecipeCard;
