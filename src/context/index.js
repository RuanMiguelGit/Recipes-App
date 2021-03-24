import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [hideSearchBar, setHideSearchBar] = useState(true);
  const [apiData, setApiData] = useState({});
  const [apiCategories, setApiCategories] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const filterByCategory = (category) => {
    if (category) return (apiData.filter(({ strCategory }) => strCategory === category));
    return [];
  };

  const obj = {
    hideSearchBar: { value: hideSearchBar, set: setHideSearchBar },
    apiData: { value: apiData, set: setApiData },
    apiCategories: { value: apiCategories, set: setApiCategories },
    filteredRecipes: {
      value: filteredRecipes, set: (cat) => setFilteredRecipes(filterByCategory(cat)),
    },
  };
  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
};

export default ContextProvider;
