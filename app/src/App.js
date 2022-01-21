import React from "react";
import {
  BrowserRouter as Router,
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
        <Route path="/manga/:id" element={ <MangaDetail /> } />
        <Route path="/" element={ <MangaList /> } />
      </Routes>
    </Layout>
  </Router>
);

export default App;
