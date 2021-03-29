import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import ButtonLink from './ButtonLink';
import { Context } from '../context';

const ExploreDrinksButton = () => {
  const history = useHistory();
  const { apiData } = useContext(Context);

  return (
    <div>
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
          func={ () => history
            .push(`/bebidas/${apiData.value.map((item) => item.idDrink)}`) }
        />
      </Grid>
    </div>
  );
};

export default ExploreDrinksButton;
