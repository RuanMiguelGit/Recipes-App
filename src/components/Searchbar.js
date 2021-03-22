import React, { useContext } from 'react';
import { Card, Paper } from '@material-ui/core';
import InputText from './InputText';
import { Context } from '../context';
import './Search.css';

const Searchbar = () => {
  const { searched, setSearched } = useContext(Context);

  return (
    <div>
      <Paper elevation="10" variant="elevation">
        <Card component="form" className="search-bar">
          <InputText
            fullWidth
            id="Search"
            label="Search"
            size="small"
            name="search-input"
            variant="filled"
            value={ searched }
            updateState={ setSearched }

          />
        </Card>
      </Paper>

    </div>
  );
};

export default Searchbar;
