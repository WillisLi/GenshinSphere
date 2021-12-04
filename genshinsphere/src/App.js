import './App.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Homepage from './components/HomePage/Homepage';
import CharactersList from './components/Characters/CharactersList';
import CharacterPage from './components/Characters/CharacterPage';
import ArtifactsList from './components/Artifacts/ArtifactsList';
import ArtifactsPage from './components/Artifacts/ArtifactsPage';
import ArchiveHistory from './components/Banners/EntityArchive/ArchiveHistory';
import BannerHistory from './components/Banners/History/BannerHistory';
import Maintenance from './components/Maintenance/Maintenance';
import WeaponList from './components/Weapons/WeaponList';
import WeaponPage from './components/Weapons/WeaponPage';
import Footer from './components/Footer/Footer';

const queryClient = new QueryClient();

const types = [
  "artifacts",
  "banners",
  "characters",
  "weapons",
]

function App() {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [location]);

  return (
    <QueryClientProvider client = {queryClient}>
      <div className = "genshinSphereApp">
        <div className = "fixed-container">
          <Header />
          <NavBar/>
        </div>

        <Routes>
          <Route exact path = "/" element = {<Homepage />}/>
          <Route exact path = "/artifacts" element = {<ArtifactsList />}/>
          <Route path = "/artifacts/:name" element = {<ArtifactsPage />}/>
          <Route exact path = "/characters" element = {<CharactersList />}/>
          <Route path = "/characters/:name" element = {<CharacterPage />}/>
          <Route exact path = "/weapons" element = {<WeaponList />}/>
          <Route path = "/weapons/:name" element = {<WeaponPage />}/>
          <Route exact path = "/banners" element = {<BannerHistory />}/>
          <Route path = "/banners/4*char" element = {<ArchiveHistory cat = {"character"} type = {"featured"}/>}/>
          <Route path = "/banners/4*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"featured"}/>}/>
          <Route path = "/banners/5*weapon" element = {<ArchiveHistory cat = {"weapon"} type = {"limited"}/>}/>
          <Route exact path = "/food" element = {<Maintenance />}/>
          <Route exact path = "/materials" element = {<Maintenance />}/>
        </Routes>
      </div>
      <Footer />
    </QueryClientProvider>
  );
}

export default App;
