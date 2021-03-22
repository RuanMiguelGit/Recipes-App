import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Searchbar from '../components/Searchbar';

const Origin = () => (
  <div>
    <Header
      name="Explorar Origem"
      foodClass="explorer-foods-origin "
      Show
    />
    <Searchbar />
    <Footer
      foodClass="explorer-foods-origin-footer"
    />
  </div>
);

export default Origin;
