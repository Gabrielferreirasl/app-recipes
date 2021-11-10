import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Login from './pages/Login';
import RecipesProvider from './provider/RecipesProvider';
import Comidas from './pages/Comidas';
import Explorar from './pages/Explorar';
import Perfil from './pages/Perfil';
import Bebidas from './pages/Bebidas';
import Details from './pages/Details';
import ExplorarComidasOuBedidas from './pages/ExplorarComidasOuBedidas';
import InProgress from './pages/InProgress';
import Details from './components/Details';
import ReceitasFavoritas from './pages/ReceitasFavoritas';
import ReceitasFeitas from './pages/ReceitasFeitas';
import ExplorarComidasOuBedidas from './pages/ExplorarComidasOuBedidas';

function App() {
  return (
    <BrowserRouter>
      <RecipesProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/perfil" component={ Perfil } />
          <Route exact path="/comidas" component={ Comidas } />
          <Route exact path="/comidas/:id" component={ Details } />
          <Route path="/explorar/comidas/" component={ ExplorarComidasOuBedidas } />
          <Route path="/explorar/bebidas/" component={ ExplorarComidasOuBedidas } />
          <Route path="/comidas/:id/in-progress" component={ InProgress } />
          <Route path="/bebidas/:id/in-progress" component={ InProgress } />
          <Route exact path="/explorar" component={ Explorar } />
          <Route exact path="/bebidas/:id" component={ Details } />
          <Route exact path="/bebidas" component={ Bebidas } />
          <Route exact path="/receitas-feitas" component={ ReceitasFeitas } />
          <Route exact path="/receitas-favoritas" component={ ReceitasFavoritas } />
        </Switch>
      </RecipesProvider>
    </BrowserRouter>
  );
}

export default App;
