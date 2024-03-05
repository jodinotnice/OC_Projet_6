import { Link } from 'react-router-dom';
import logementsData from '../logements.json';
import '../Styles/Card.css';


function Card(){

  return(
  <>
  <div className='container-flex'>
    {logementsData.map((logement) => (
        <div>
        <Link className="card-form" key={logement.id} to={`/logements/${logement.id}`}>
          <div className='card-flex'>
            <img className='card-logement' src={logement.cover} alt={logement.title} />
            <h3 className='card-overlay'>{logement.title}</h3>
          </div>
        </Link>
        </div>
      ) )};  
    </div>
  </>
  )
}

export default Card