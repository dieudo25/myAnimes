import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Layout from './components/layout/Layout';
import MangaList from './components/manga/MangaList'
import MangaDetail from "./components/manga/MangaDetail";

import "./App.css"


const App = () => (
  /* MyMangas App */

  <Router>
    <Layout >
      <Routes>
        <Route path="/myAnimes/manga/:id" element={ <MangaDetail /> } />
        <Route path="/myAnimes" element={ <MangaList /> } />
      </Routes>
    </Layout>
  </Router>
);

export default App;
