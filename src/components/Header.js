import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="leftnav">
          <h3>Accueil</h3>
        </div>
        <div className="rightnav">
          <h3>Resultats</h3>
          <h3>Matchs</h3>
        </div>
      </nav>
    </header>
  );
}

export default Header;
