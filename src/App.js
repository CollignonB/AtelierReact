import './App.css';
import Header from './layout/header/Header.js';
import Nav from './layout/nav/Nav.js';
import Footer from './layout/footer/Footer.js';
import Home from './home/Home.js';
import Swapi from './swapi/Swapi.js';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() 
{
  return (
    <div className="App">
      <Header />
      <Router>
        <Nav />
        <main className="container my-5">
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/swapi">
              <Swapi />
            </Route>
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;