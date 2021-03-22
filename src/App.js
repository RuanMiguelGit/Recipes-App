import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ConxtextProvider from './context';
import './App.css';
import Login from './pages/Login';
import MainFoods from './pages/MainFoods';
import MainDrinks from './pages/MainDrinks';
import Explorer from './pages/Explorer';
import ExplorerFods from './pages/ExplorerFods';
import ExplorerDrinks from './pages/ExplorerDrinks';
import ExploreFoodsByingredients from './pages/ExploreFoodsByingredients';
import ExploreDriksByIngredients from './pages/ExploreDriksByIngredients';
import Origin from './pages/Origin';
import Profile from './pages/Profile';
import RecipesDone from './pages/RecipesDone';
import RecipesFav from './pages/RecipesFav';
import DetailsFood from './pages/DetailsFood';
import DetailsDrinks from './pages/DetailsDrinks';
import RecipeInProgressFoos from './pages/RecipeInProgressFoos';
import RecipeInProgressDrinks from './pages/RecipeInProgressDrinks';

function App() {
  return (
    <ConxtextProvider>
      <Switch>
        <Route
          exact
          path="/explorar/comidas/ingredientes"
          component={ ExploreFoodsByingredients }
        />
        <Route
          exact
          path="/explorar/bebidas/ingredientes"
          component={ ExploreDriksByIngredients }
        />
        <Route exact path="/explorar/comidas/area" component={ Origin } />
        <Route exact path="/explorar/comidas" component={ ExplorerFods } />
        <Route path="/explorar/bebidas" component={ ExplorerDrinks } />
        <Route path="/explorar" component={ Explorer } />
        <Route path="/comidas/:id/in-progress" component={ RecipeInProgressFoos } />
        <Route path="/bebidas/:id/in-progess" component={ RecipeInProgressDrinks } />
        <Route path="/comidas/:id" component={ DetailsFood } />
        <Route path="/bebidas/:id" component={ DetailsDrinks } />
        <Route path="/comidas" component={ MainFoods } />
        <Route path="/bebidas" component={ MainDrinks } />
        <Route path="/receitas-feitas" component={ RecipesDone } />
        <Route path="/receitas-favoritas" component={ RecipesFav } />
        <Route path="/perfil" component={ Profile } />
        <Route path="/" component={ Login } />
      </Switch>
    </ConxtextProvider>
  );
}

export default App;
