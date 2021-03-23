import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import ButtonLink from '../components/ButtonLink';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Context } from '../context';

const ExplorerFods = () => {
  const { FetchRandomFood } = useContext(Context);

  return (

    <div>
      <Header
        name="Explorar Comidas"
        foodClass="explorer-foods"
        Show={ false }
      />
      <Grid className="Button-explorer">
        <ButtonLink
          LinkT="/explorar/comidas/ingredientes"
          name="Explorar Por Ingredientes"
          className="SizeUp"
          size="large"
          variant="contained"
          color="secondary"
          type="button"
          datatest="explore-by-ingredient"
        />

        <ButtonLink
          LinkT="/explorar/comidas/area"
          name="Por Local de Origem"
          className="SizeUp"
          size="large"
          variant="contained"
          color="secondary"
          href="#contained-buttons"
          type="button"
          datatest="explore-by-area"
        />

        <ButtonLink
          name="Me Surpreenda!"
          className="SizeUp"
          size="large"
          variant="contained"
          color="secondary"
          href="#contained-buttons"
          type="button"
          datatest="explore-surprise"
          func={ () => FetchRandomFood() }
        />
      </Grid>
      <Footer
        foodClass="explorer-foods-footer"
      />
    </div>
  );
};

export default ExplorerFods;
