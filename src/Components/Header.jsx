import { NavLink } from 'react-router-dom';
import logo from '../assets/_Header.png';
import '../Styles/Header.css';

function Header() {
 
  return(
  <>
  <header className='flex-head'>
            <figure>
              <img src={logo} alt="Logo" />
            </figure>

            <nav className="navbar">
              
                <NavLink  activeClassName="active" to="/">Accueil</NavLink>
                <NavLink  activeClassName="active" to={`/a-propos`}> A propos</NavLink>
              
            </nav>
    </header>
          </>
  )
}

export default Header
