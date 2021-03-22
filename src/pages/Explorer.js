import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Explorer = () => (
  <div>
    <Header
      name="Explorar"
      foodClass="explorer"
      Show={ false }
    />
    <Footer
      foodClass="explorer-footer"
    />
  </div>
);

export default Explorer;
