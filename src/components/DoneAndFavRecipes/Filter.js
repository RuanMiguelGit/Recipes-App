import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';

const Filter = ({ updateState }) => (
  <Grid container justify="center" alignItems="center" className="done-recipes-filter">
    <ButtonGroup variant="contained" fullWidth>
      <Button onClick={ () => updateState('') } data-testid="filter-by-all-btn">
        All
      </Button>
      <Button onClick={ () => updateState('comida') } data-testid="filter-by-food-btn">
        Food
      </Button>
      <Button onClick={ () => updateState('bebida') } data-testid="filter-by-drink-btn">
        Drinks
      </Button>
    </ButtonGroup>
  </Grid>
);

Filter.propTypes = {
  updateState: PropTypes.func.isRequired,
};

export default Filter;
