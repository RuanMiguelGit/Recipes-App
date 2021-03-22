import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExplorerFods = () => (
  <div>
    <Header
      name="Explorar Comidas"
      foodClass="explorer-foods"
      Show={ false }
    />
    <Footer
      foodClass="explorer-foods-footer"
    />
  </div>
);

export default ExplorerFods;
