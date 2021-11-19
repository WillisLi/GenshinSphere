import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NavBar from './components/NavBar/NavBar';
import CharactersList from './components/Characters/CharactersList';
import CharacterPage from './components/Characters/CharacterPage';
import ArtifactsList from './components/Artifacts/ArtifactsList';
import BannerHistory from './components/Banners/History/BannerHistory';
import ArchiveHistory from './components/Banners/EntityArchive/ArchiveHistory';
import ArtifactsPage from './components/Artifacts/ArtifactsPage';
import WeaponList from './components/Weapons/WeaponList';
import Maintenance from './components/Maintenance/Maintenance';

const queryClient = new QueryClient();

const types = [
  "artifacts",
  "banners",
  "characters",
  "weapons",
]

function App() {
  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "genshinSphereApp">
        <NavBar/>

        <Routes>
          <Route exact path = "/" element = {<Homepage />}/>
          <Route exact path = "/artifacts" element = {<ArtifactsList />}/>
          <Route path = "/artifacts/:name" element = {<ArtifactsPage />}/>
          <Route exact path = "/characters" element = {<CharactersList />}/>
          <Route path = "/characters/:name" element = {<CharacterPage />}/>
          <Route exact path = "/weapons" element = {<WeaponList />}/>
          <Route exact path = "/banners" element = {<BannerHistory />}/>
          <Route path = "/banners/4*char" element = {<ArchiveHistory cat = {"character"} type = {"featured"}/>}/>
          <Route path = "/banners/4*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"featured"}/>}/>
          <Route path = "/banners/5*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"limited"}/>}/>
          <Route exact path = "/food" element = {<Maintenance />}/>
          <Route exact path = "/materials" element = {<Maintenance />}/>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
