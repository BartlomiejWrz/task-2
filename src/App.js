import React from 'react';
import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/Books/Books"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
