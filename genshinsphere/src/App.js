import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import { useQuery } from 'react-query';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios'
import Homepage from './components/Homepage';
import NavBar from './components/NavBar/NavBar';
// const fetchGenshin = async () => {
//   const res = await fetch('https://api.genshin.dev/characters');
//   return res.json();
// }

function App() {
  // const { data, status } = useQuery('genshin', fetchGenshin);
  // const [ image, setImage ] = useState('');
  // useEffect(() => {
  //   axios.get('https://api.genshin.dev/characters/amber')
  //   .then(response => {
  //     console.log(response)
  //     setImage(response.config.url)
  //   })
  // }, [])
  return (
      <div className = "genshinSphereApp">
        <NavBar/>

        <Switch>
          <Route path = "/" component = {Homepage}/>
        </Switch>
      </div>
  );
}

export default App;
