import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExplorerDrinks = () => (
  <div>
    <Header
      name="Explorar Bebidas"
      foodClass="explorer-drinks"
      Show={ false }
    />
    <Footer
      foodClass="explorer-drinks-footer"
    />
  </div>
);

export default ExplorerDrinks;
