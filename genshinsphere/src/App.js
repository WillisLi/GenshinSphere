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
import PolearmPage from './components/Weapons/PolearmPage';

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
          <Route exact path = "/characters" element = {<CharactersList />}/>
          <Route path = "/characters/:name" element = {<CharacterPage />}/>
          <Route path = "/weapons/polearm" element = {<PolearmPage />}/>
          <Route exact path = "/banners" element = {<BannerHistory />}/>
          <Route path = "/banners/4*char" element = {<ArchiveHistory cat = {"character"} type = {"featured"}/>}/>
          <Route path = "/banners/4*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"featured"}/>}/>
          <Route path = "/banners/5*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"limited"}/>}/>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
