import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import profileIcons from '../images/profileIcon.svg';
import './MainHeader.css';
import SearchButton from './SearchButton';

const Header = ({ name, foodClass, Show }) => (
  <AppBar position="static">
    <Toolbar className={ foodClass }>
      <Link to="/perfil">
        <Button src={ profileIcons } type="button" data-testid="profile-top-btn">
          <img src={ profileIcons } alt="profileIcon" />
        </Button>
      </Link>
      <Typography variant="h6" data-testid="page-title">{name}</Typography>

      {
        (Show ? <SearchButton />
          : <Button />)
      }
    </Toolbar>
  </AppBar>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  foodClass: PropTypes.string.isRequired,
  Show: PropTypes.bool.isRequired,
};

export default Header;
