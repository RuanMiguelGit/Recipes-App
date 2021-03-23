import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [hide, setHide] = useState(true);
  const [searched, setSearched] = useState('');
  const [loading, setLoading] = useState(false);
  const [randomFood, setRandomFood] = useState([]);

  function hideBar() {
    setHide(!hide);
    console.log('chamou');
  }

  async function FetchRandomFood() {
    setLoading(true);
    await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((response) => response.json())
      .then((json) => setRandomFood((json)));
    setLoading(false);
    console.log(randomFood);
  }

  const obj = {
    hide,
    hideBar,
    searched,
    setSearched,
    randomFood,
    loading,
    FetchRandomFood,

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
