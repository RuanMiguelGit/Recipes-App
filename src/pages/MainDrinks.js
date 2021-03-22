import React, { useContext } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

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

      <Footer
        foodClass="main-drinks-footer"
      />
    </div>
  );
};

export default MainDrinks;
