import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Teams from './components/Teams';
import Team from './components/Team';
import Type from './components/Type';
import SearchResult from './components/SearchResult';
import Pokemon from './components/Pokemon';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/teams" exact component={Teams} />
        <Route path="/teams/:slug" component={Team} />
        <Route path="/:type" component={Type} />
        <Route path="/searchresults/:pokemon" component={SearchResult} />
        <Route path="/pokemons/:pokemon" component={Pokemon} />
      </Switch>
    </Router>
  );
};

export default App;

