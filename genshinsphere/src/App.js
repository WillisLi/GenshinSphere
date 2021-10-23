import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query'
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar/NavBar';
import CharactersList from './components/Characters/CharactersList';
import CharacterPage from './components/Characters/CharacterPage';
import BannerHistory from './components/Banners/BannerHistory';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "genshinSphereApp">
        <NavBar/>

        <Switch>
          <Route exact path = "/" component = {Homepage}/>
          <Route exact path = "/characters" component = {CharactersList}/>
          <Route path = "/characters/:name" component = {CharacterPage}/>
          <Route exact path = "/banners" component = {BannerHistory}/>
          {/* <Route path = "/banners/:id" component = {BannerHistory}/> */}
        </Switch>
      </div>
    </QueryClientProvider>
  );
}

export default App;
