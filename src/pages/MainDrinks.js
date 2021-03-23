import React, { useContext, useEffect } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';

const MainDrinks = () => {
  const { hideSearchBar } = useContext(Context);

  useEffect(() => {
    hideSearchBar.set(true);
  }, []);

  return (
    <div>
      <Header
        name="Bebidas"
        foodClass="main-drinks"
        Show
      />
      { !hideSearchBar.value && <Searchbar type="drink" />}
      <Footer
        foodClass="main-drinks-footer"
      />
    </div>
  );
};

export default MainDrinks;
