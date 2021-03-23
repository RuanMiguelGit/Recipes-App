import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [hideSearchBar, setHideSearchBar] = useState(true);
  const [apiData, setApiData] = useState({});

  const obj = {
    hideSearchBar: { value: hideSearchBar, set: setHideSearchBar },
    apiData: { value: apiData, set: setApiData },
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
