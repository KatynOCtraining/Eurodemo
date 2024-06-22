import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div className="leftnav">
          <h3>
            <Link to="/">Accueil</Link>
          </h3>
        </div>
        <div className="rightnav">
          <h3>
            <Link to="/resultat">Résultats</Link>
          </h3>
          <h3>
            <Link to="/match">Matchs</Link>
          </h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
