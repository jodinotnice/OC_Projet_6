import Logo from '../assets/logo-noir.png';
import '../Styles/Footer.css';

function Footer() {
 
  return(
  <>
  <footer className="footer-style">
      <div className="flex-footer">
          <img src={Logo} alt="Logo-Kasa-noir" />
          <p className="mention-style">
            &#xa9;2020. All rights reserved
          </p>
      </div>
    </footer>
          </>
  )
}

export default Footer
