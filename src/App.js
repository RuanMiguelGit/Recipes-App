import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ConxtextProvider from './context';
import './App.css';
import Login from './pages/Login';

function App() {
  return (
    <ConxtextProvider>
      <Switch>
        <Route path="/" component={ Login } />
      </Switch>
    </ConxtextProvider>
  );
}

export default App;
