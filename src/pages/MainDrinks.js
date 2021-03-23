import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../context';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';
import Footer from '../components/Footer';
import Loading from '../components/animation/Loading';
import RecipeCardsContainer from '../components/Cards/RecipeCardsContainer';

const MainDrinks = () => {
  const { hide, mainRecipes } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      const { drinks } = await (await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=')).json();
      mainRecipes.set(drinks);
      setLoading(false);
    };
    fetchRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header
        name="Bebidas"
        foodClass="main-drinks"
        Show
      />
      { hide ? null : <Searchbar />}

      { loading ? <Loading /> : <RecipeCardsContainer
        cardsInfos={ mainRecipes.value }
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
