// AppRouter.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./Pages/Accueil";
import Resultat from "./Pages/Resultat";
import Match from "./Pages/Match";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Background />
        <Header />
        <Routes>
          <Route path="/" exact element={Accueil} />
          <Route path="/resultat" element={Resultat} />
          <Route path="/match" element={Match} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default AppRouter;
