import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/layout/Layout';
import AnimeList from './components/anime/AnimeList'

const App = () => (
  <Router>
    <Layout >
      <Routes>
        <Route path="/" element={ <AnimeList /> } />
      </Routes>
    </Layout>
  </Router>
);

export default App;
