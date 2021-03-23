import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [hide, setHide] = useState(true);
  const [searched, setSearched] = useState('');
  const [mainRecipes, setMainRecipes] = useState();

  function hideBar() {
    setHide(!hide);
    console.log('chamou');
  }

  const obj = {
    hide,
    hideBar,
    searched,
    setSearched,
    mainRecipes: { value: mainRecipes, set: (recArray) => setMainRecipes(recArray) },
  };
  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
