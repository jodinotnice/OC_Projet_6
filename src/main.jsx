import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './Styles/index.css';
import Layout from './Components/Layout.jsx';
import APropos from './pages/A-propos.jsx';
import FicheLogement from './pages/Fiche-de-Logement.jsx';
import FichesLogements from './pages/PageAccueil.jsx';
import ErreurPage from './pages/PageErreur.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx'


/*const router = createBrowserRouter([
  {

    element: <Layout />,
    children: [
      {
        path: '/',
        element: <FichesLogements />,
        errorElement: <ErreurPage />,
      },
      {
        path: '/logements/:id',
        element: <FicheLogement />,
        errorElement: <ErreurPage />,
      },
      {
        path: '/a-propos',
        element: <APropos />
      },
    ]
  },
  
]); 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);*/


const routing = (
  <Router>
    <div>
      <Header />                                      
      <Routes>
        <Route exact path='/' element={<FichesLogements/>} />
        <Route exact path='/logements/:id' element={<FicheLogement />} errorElement={<ErreurPage />} />
        <Route exact path='/a-propos' element={<APropos/>} />
        <Route path='*'  element={<ErreurPage/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(routing);