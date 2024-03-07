import { Routes, Route } from "react-router-dom";
import './Styles/index.css';
import APropos from './pages/A-propos.jsx';
import FicheLogement from './pages/Fiche-de-Logement.jsx';
import FichesLogements from './pages/PageAccueil.jsx';
import ErreurPage from './pages/PageErreur.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';


function App() {
 
  return(
    <>
      <Header />
        <Routes>
            <Route exact path='/' element={<FichesLogements/>} />
            <Route exact path='/logements/:id' element={<FicheLogement />} />
            <Route exact path='/a-propos' element={<APropos/>} />
            <Route path='/*'  element={<ErreurPage/>} />
        </Routes>
      <Footer />
    </>
  )
}

export default App
