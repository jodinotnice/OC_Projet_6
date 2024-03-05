import { Link } from 'react-router-dom';
import "../Styles/Error.css";

function Error() {

  return (
    <>
    <div className="containerError">
      <div className="errorStyle">
        <p className="errorNumber">404</p>
        <p className="errorText">Oups! La page que vous demandez n'existe pas.</p>
        <Link className="redirect" to="/">Retourner sur la page d'accueil</Link>
    </div>
    </div> 
    </>
  )
}

export default Error;