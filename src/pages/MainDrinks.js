/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';
import getApiData from '../services/apiRequest';

const MainDrinks = () => {
  const { hideSearchBar, apiData } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApiData('drink', 'search.php?s=').then((data) => {
      apiData.set(data);
      setLoading(false);
    });
  }, []);

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

      { loading ? <Loading /> : <RecipeCardsContainer
        cardsInfos={ apiData.value }
        cardType="drink"
        maxCards={ 12 }
      />}

      <Footer
        foodClass="main-drinks-footer"
      />
    </div>
  );
};

export default MainDrinks;
