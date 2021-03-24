import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import SmallHolder from '../components/SmallHolder';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ButtonLink from '../components/ButtonLink';

const Profile = () => {
  const [LocalStore, setStore] = useState('');
  useEffect(() => {
    if (!localStorage.getItem('user') !== undefined
  && localStorage.getItem('user') !== null) {
      setStore(Object.values(JSON.parse(localStorage.getItem('user'))));
    }
  }, []);

  return (
    <div>
      <Header
        name="Perfil"
        foodClass="Profile"
        Show={ false }
      />
      <SmallHolder
        name={ LocalStore }
        className="main"
      />

      <Grid className="Button-explorer">
        <ButtonLink
          LinkT="/receitas-feitas"
          name="Receitas Feitas"
          className="SizeUp"
          size="large"
          variant="contained"
          color="inherit"
          href="#contained-buttons"
          type="button"
          datatest="profile-done-btn"
        />

        <ButtonLink
          LinkT="/receitas-favoritas"
          name="Receitas Favoritas"
          className="SizeUp"
          size="large"
          variant="contained"
          color="inherit"
          href="#contained-buttons"
          type="button"
          datatest="profile-favorite-btn"
        />
      </Grid>
      <Grid className="Button-Logout">
        <ButtonLink
          LinkT="/"
          className="SizeDown"
          name="Sair"
          size="small"
          variant="contained"
          color="secondary"
          href="#contained-buttons"
          type="button"
          datatest="profile-logout-btn"
          func={ () => localStorage.clear() }
        />
      </Grid>
      <Footer
        foodClass="Profile-footer"
      />
    </div>
  );
};

export default Profile;
