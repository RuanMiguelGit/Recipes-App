import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import InputText from '../components/InputText';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className="root-login"
    >
      <Grid item xs={ 10 }>
        <Card component="form" className="card-login">
          <InputText
            label="Email"
            name="email-input"
            value={ email }
            updateState={ setEmail }
          />
          <InputText
            label="Password"
            name="password-input"
            type="password"
            value={ password }
            updateState={ setPassword }
          />
          <Button type="submit" variant="contained" data-testid="login-submit-btn">
            Login
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
