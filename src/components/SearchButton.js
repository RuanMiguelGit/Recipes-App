import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import searchicon from '../images/searchIcon.svg';
import { Context } from '../context';

const SearchButton = () => {
  const { hideBar } = useContext(Context);

  return (
    <Button
      src={ searchicon }
      onClick={ () => hideBar() }
      type="button"
      data-testid="search-top-btn"
    >
      <img src={ searchicon } alt="searchIcon" />
    </Button>
  );
};

export default SearchButton;
