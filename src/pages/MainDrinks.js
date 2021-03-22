import React, { useContext } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

const MainDrinks = () => {
  const { hide } = useContext(Context);

  return (
    <div>
      <Header
        name="Bebidas"
        foodClass="main-drinks"
        Show
      />
      { hide ? null
        : <Searchbar />}
    </div>
  );
};

export default MainDrinks;
