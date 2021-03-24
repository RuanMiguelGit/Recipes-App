import { Grid } from '@material-ui/core';
import React from 'react';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ExplorerDrinks = () => (
  <div>
    <Header
      name="Explorar Bebidas"
      foodClass="explorer-drinks"
      Show={ false }
    />

    <Grid className="Button-explorer">
      <ButtonLink
        LinkT="/explorar/bebidas/ingredientes"
        name="Explorar Por Ingredientes"
        className="SizeUp"
        size="large"
        variant="contained"
        color="primary"
        type="button"
        datatest="explore-by-ingredient"
      />

      <ButtonLink
        name="Me Surpreenda!"
        className="SizeUp"
        size="large"
        variant="contained"
        color="primary"
        href="#contained-buttons"
        type="button"
        datatest="explore-surprise"
      />
    </Grid>
    <Footer
      foodClass="explorer-drinks-footer"
    />
  </div>
);

export default ExplorerDrinks;
