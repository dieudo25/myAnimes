import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/layout/Layout';
import AnimeList from './components/anime/AnimeList'
import AnimeDetail from "./components/anime/AnimeDetail";

import "./App.css"


const App = () => (
  /* MyAnimes App */
  <Router>
    <Layout >
      <Routes>
        <Route path="/anime/:id" element={ <AnimeDetail /> } />
        <Route path="/" element={ <AnimeList /> } />
      </Routes>
    </Layout>
  </Router>
);

export default App;
