import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/layout/Layout';
import AnimeList from './components/anime/AnimeList'
import AinmeDetail from "./components/anime/AnimeDetail";


const App = () => (
  <Router>
    <Layout >
      <Routes>
        <Route path="/anime/:id" element={ <AinmeDetail /> } />
        <Route path="/" element={ <AnimeList /> } />
      </Routes>
    </Layout>
  </Router>
);

export default App;
