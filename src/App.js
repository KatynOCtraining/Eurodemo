import React from "react";
import "./App.css";
import Background from "./components/Background";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Background />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
