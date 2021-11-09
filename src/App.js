import React from 'react';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';


import { Link, Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    //toda nuestra aplicacion va a utilizar el proveedor del contexto
    <>
      <section className="App App-content">

        <Link to="/">
          <img className="App-logo" alt="Giphy logo" src="/giphy.png"></img>
        </Link>

      </section>
      <GifsContextProvider>
        <Route component={Home} path="/" />
        <Route component={SearchResults} path="/search/:keyword" />
        <Route component={Detail} path="/gif/:id" />
      </GifsContextProvider>
    </>
  );
}

export default App;
