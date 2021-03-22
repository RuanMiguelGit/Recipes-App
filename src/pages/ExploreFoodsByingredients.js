import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExploreFoodsByingredients = () => (
  <div>
    <Header
      name="Explorar Ingredientes"
      foodClass="explorer-foods-ingredients"
      Show={ false }
    />
    <Footer
      foodClass="explorer-foods-ingredients-footer"
    />
  </div>
);

export default ExploreFoodsByingredients;
