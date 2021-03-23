import React, { useContext, useEffect, useState } from 'react';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import { Context } from '../context';

const MainFoods = () => {
  const { hide, mainRecipes } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { meals } = await (await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')).json();
      mainRecipes.set(meals);
      console.log(meals);
      setLoading(false);
    };
    fetchRecipes();
    // eslint-disable-next-line
  }, []);

  return (

    <div>
      <Header
        name="Comidas"
        foodClass="main-food"
        Show
      />
      { hide ? null : <Searchbar />}
      { loading ? <Loading /> : <RecipeCardsContainer
        cardsInfos={ mainRecipes.value }
        cardType="food"
        maxCards={ 12 }
      />}
      <Footer
        foodClass="main-food-footer"
      />
    </div>

  );
};

export default MainFoods;
