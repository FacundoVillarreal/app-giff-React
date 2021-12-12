import React, { Suspense } from 'react';
import './App.css';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';


import { Link, Route } from 'wouter'
import { GifsContextProvider } from './context/GifsContext';
import Box from "@mui/material/Box"

const homePage = React.lazy(() => import('./pages/Home'))

function App() {


  return (
    //toda nuestra aplicacion va a utilizar el proveedor del contexto
    <Box sx={{
      marginLeft: 1,
      height: "100hv"
    }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Link to="/">
          <img className="App-logo" alt="Giphy logo" src="/giphy.png"></img>
        </Link>
      </Box>
      <GifsContextProvider>
        <Suspense fallback={null}>
          <Route component={homePage} path="/" />
          <Route component={SearchResults} path="/search/:keyword/:rating?" />
          <Route component={Detail} path="/gif/:id" />
          <Route component={()=> <h1>Error 404 :v </h1>} path="/404" />
        </Suspense>
      </GifsContextProvider>
    </Box>
  );
}

export default App;
