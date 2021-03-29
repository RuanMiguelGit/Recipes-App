/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import CategoriesSelector from '../components/Selectors/CategoriesSelector';
import { Context } from '../context';
import getApiData from '../services/apiRequest';

const MainFoods = () => {
  const { apiData, hideSearchBar, filteredRecipes } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [ídName, setidName] = useState('');
  useEffect(() => {
    hideSearchBar.set(true);
    getApiData('food', 'search.php?s=').then((data) => {
      apiData.set(data);
      setLoading(false);
      setidName(apiData.value.idMeal);
      console.log(ídName);
    });
  }, []);

  return (

    <div>
      <Header
        name="Comidas"
        foodClass="main-food"
        Show
      />
      { !hideSearchBar.value && <Searchbar />}
      {!loading && <CategoriesSelector recipeType="food" />}
      { loading ? <Loading /> : (<RecipeCardsContainer
        cardsInfos={
          filteredRecipes.value.length > 0
            ? filteredRecipes.value
            : apiData.value
        }
        cardType="food"
        maxCards={ 12 }
      />
      )}
      <Footer
        foodClass="main-food-footer"
      />
    </div>

  );
};

export default MainFoods;
