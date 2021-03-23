/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import { Context } from '../context';

const MainFoods = () => {
  const { hideSearchBar } = useContext(Context);

  useEffect(() => {
    hideSearchBar.set(true);
  }, []);

  return (
    <div>
      <Header
        name="Comidas"
        foodClass="main-food"
        Show
      />
      { !hideSearchBar.value && <Searchbar />}
      <Footer
        foodClass="main-food-footer"
      />
    </div>
  );
};

export default MainFoods;
