/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';
import getApiData from '../services/apiRequest';
import CategoriesSelector from '../components/Selectors/CategoriesSelector';

const MainDrinks = () => {
  const { hideSearchBar, apiData, filteredRecipes } = useContext(Context);
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
      {!loading && <CategoriesSelector recipeType="drink" />}
      { loading ? <Loading /> : <RecipeCardsContainer
        cardsInfos={
          filteredRecipes.value.length > 0
            ? filteredRecipes.value
            : apiData.value
        }
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
