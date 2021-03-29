import { Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonLink from '../components/ButtonLink';
import { Context } from '../context';

const ExplorefoodsButton = () => {
  const history = useHistory();
  const { apiData } = useContext(Context);
  return (
    <div>
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
          func={ () => history
            .push(`/comidas/${apiData.value.map((item) => item.idMeal)}`) }
        />
      </Grid>
    </div>
  );
};

export default ExplorefoodsButton;
