import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../Styles/Header.css';

function Header() {
 
  return(
  <>
  <header className='flex-head'>
            <figure>
              <img src={logo} alt="Logo" />
            </figure>

            <nav className="navbar">
              
                <Link to="/">Accueil</Link>
                <Link to={`/a-propos`}> A propos</Link>
              
            </nav>
    </header>
          </>
  )
}

export default Header
