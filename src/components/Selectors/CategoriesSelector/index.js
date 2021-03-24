/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../../../context';
import getApiData from '../../../services/apiRequest';
import './styles.css';

const CategoriesSelector = ({ recipeType }) => {
  const { apiCategories, filteredRecipes } = useContext(Context);
  const [currentFilter, setCurrentFilter] = useState('');
  useEffect(() => {
    getApiData(recipeType, 'list.php?c=list').then((data) => {
      apiCategories.set(data);
    });
  }, []);

  const handleClick = (e) => {
    if (e.target.textContent === currentFilter) {
      setCurrentFilter('');
      filteredRecipes.set([]);
    } else {
      setCurrentFilter(e.target.textContent);
      filteredRecipes.set(e.target.textContent);
    }
  };

  const CATEGORIES_AMOUNT = 5;

  return (
    <Grid container spacing={ 1 } className="selector-grid">
      <Grid item xs={ 4 }>
        <Button
          variant="contained"
          fullWidth
          value="All"
          onClick={ () => handleClick }
        >
          All

        </Button>
      </Grid>
      {apiCategories.value.slice(0, CATEGORIES_AMOUNT).map(({ strCategory }) => (
        <Grid item key={ strCategory } xs={ 4 }>
          <Button
            variant="contained"
            fullWidth
            key={ strCategory }
            value={ strCategory }
            onClick={ handleClick }
            data-testid={ `${strCategory}-category-filter` }
          >
            {strCategory}

          </Button>
        </Grid>
      ))}
    </Grid>

  );
};

CategoriesSelector.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default CategoriesSelector;
