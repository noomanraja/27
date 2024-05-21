import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './components/Home';
import Teams from './components/Teams';
import Type from './components/Type';
import SearchResult from './components/SearchResult';
import Pokemon from './components/Pokemon';
import SearchBar from './components/SearchBar';
import './App.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <header>
          <Link to="/"><h1>UIN POKEDEX</h1></Link>
          <Link to="/teams">Teams</Link>
          <SearchBar />
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/:type" element={<Type />} />
            <Route path="/searchresults/:pokemon" element={<SearchResult />} />
            <Route path="/pokemons/:pokemon" element={<Pokemon />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
