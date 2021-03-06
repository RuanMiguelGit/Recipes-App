/* eslint-disable react-hooks/exhaustive-deps */
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../context';
import getApiData,
{ EpAllRecipes, EpRecipesByArea, EpRecipesByAreas } from '../services/apiRequest';
import './FormControl.css';

const CategoryDropDownSelector = ({ recipeType }) => {
  const { apiName, filteredName, apiData } = useContext(Context);
  const [currentFilterName, setcurrentFilterName] = useState('');
  useEffect(() => {
    getApiData(recipeType, EpRecipesByArea).then((data) => { apiName.set(data); });
    return () => { apiName.set([]); };
  }, [currentFilterName]);

  const handleClick = (e) => {
    if (e.target.textContent === currentFilterName || e.target.textContent === 'All') {
      setcurrentFilterName('');
      getApiData(recipeType, EpAllRecipes).then((data) => {
        apiData.set(data);
      });
      filteredName.set([]);
    } else {
      setcurrentFilterName(e.target.textContent);
      getApiData(recipeType, EpRecipesByAreas, e.target.textContent)
        .then((data) => apiData.set(data));
    }
  };

  return (
    <FormControl className="formControl" margin="dense">
      <InputLabel htmlFor="select">Area</InputLabel>
      <Select
        id="select"
        data-testid="explore-by-area-dropdown"
        value={ currentFilterName }
        onChange={ (e) => setcurrentFilterName(e.target.value) }
      >
        <MenuItem
          key="All"
          value="All"
          onClick={ handleClick }
          data-testid="All-option"
        >
          All
        </MenuItem>
        {apiName.value && apiName.value
          .map(({ strArea }) => (
            <MenuItem
              key={ strArea }
              value={ strArea }
              onClick={ handleClick }
              data-testid={ `${strArea}-option` }
            >

              {strArea}

            </MenuItem>
          ))}

      </Select>
    </FormControl>

  );
};

CategoryDropDownSelector.propTypes = {
  recipeType: PropTypes.string.isRequired,
};

export default CategoryDropDownSelector;
