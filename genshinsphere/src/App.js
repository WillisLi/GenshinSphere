import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar/NavBar';
import axios from 'axios';
import CharactersList from './components/Characters/CharactersList';
import CharacterPage from './components/Characters/CharacterPage';

const queryClient = new QueryClient()

function App() {
  // useEffect(() => {
  //   axios.get('https://api.genshin.dev/characters/xiao')
  //   .then(response => {
  //     console.log(response.data)
  //   })
  // }, [])
  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "genshinSphereApp">
        <NavBar/>

        <Switch>
          <Route exact path = "/" component = {Homepage}/>
          <Route exact path = "/characters" component = {CharactersList}/>
          <Route path = "/characters/:name" component = {CharacterPage}/>
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export default App;
