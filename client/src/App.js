import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";



import LandingScreen from './Screens/LandingScreen';
import SearchScreen from './Screens/SearchScreen';
import ResultScreen from './Screens/ResultScreen';
import history from "./history";
import Header from './Components/Header'
import Footer from './Components/Footer'


import logo from './logo.svg';
import './App.css';
import './stylesheet.css';



const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});


function App() {
  return (
    
    <div>
       <Header/>
      <div className="App">
        <Router history={history}>
        <Switch>
        <ApolloProvider client={client}>
            <Route exact path="/">
              <LandingScreen />
            </Route>
            <Route path="/search">
              <SearchScreen />
            </Route>
            <Route path="/result/:noc/:discipline">
              <ResultScreen />
            </Route>
            </ApolloProvider>
          </Switch>
        </Router>       
      </div>
      <Footer/>
    </div>
  );
}

export default App;
