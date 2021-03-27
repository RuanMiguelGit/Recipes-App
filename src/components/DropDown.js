/* eslint-disable react-hooks/exhaustive-deps */
import { Select, FormControl } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import getApiData,
{ EpAllRecipes, EpRecipesByArea, EpRecipesByAreas } from '../services/apiRequest';
import './FormControl.css';

const CategoryDropDownSelector = ({ recipeType }) => {
  const { apiCategories, filteredName, apiData } = useContext(Context);
  const [currentFilterName, setcurrentFilterName] = useState('');
  useEffect(() => {
    getApiData(recipeType, EpRecipesByArea).then((data) => {
      apiCategories.set(data);
      return () => { apiCategories.set([]); };
    });
  }, []);

  const handleClick = (e) => {
    if (e.target.textContent === currentFilterName || e.target.textContent === 'All') {
      setcurrentFilterName('');
      getApiData(recipeType, EpAllRecipes).then((data) => {
        apiData.set(data);
        console.log(apiData);
      });
      filteredName.set([]);
    } else {
      setcurrentFilterName(e.target.textContent);
      getApiData(recipeType, EpRecipesByAreas, e.target.textContent)
        .then((data) => apiData.set(data));
    }
  };

  return (

    <FormControl className="formControl" margin="dense" size="small" variant="standard">
      <Select
        data-testid="explore-by-area-dropdown"
      >
        <option
          key="All"
          variant="outlined"
          value="All"
          onClick={ handleClick }
          data-testid="All-option"
          size="small"
          className={ recipeType === 'drink' ? 'drink-button' : '' }
        >
          All
        </option>
        {apiCategories.value && apiCategories.value
          .map(({ strArea }) => (
            <option
              variant="contained"
              key={ strArea }
              value={ strArea }
              onClick={ handleClick }
              data-testid={ `${strArea}-option` }
              size="small"
              className={ recipeType === 'drink' ? 'drink-button' : '' }
            >

              {strArea}

            </option>
          ))}
      </Select>

    </FormControl>

  );
};

CategoryDropDownSelector.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default CategoryDropDownSelector;
