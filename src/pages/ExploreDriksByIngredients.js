import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreDriksByIngredients = () => (
  <div>
    <Header
      name="Explorar Ingredientes"
      foodClass="explorer-drinks-ingredients"
      Show={ false }
    />
    
    <Footer
      foodClass="explorer-drinks-ingredients-footer"
    />
  </div>
);

export default ExploreDriksByIngredients;
