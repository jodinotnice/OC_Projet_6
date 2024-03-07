import { Link } from 'react-router-dom';
import logementsData from '../logements.json';
import '../Styles/Card.css';


function Card(){

  return(
  <>
  <div className='containerFlex'>
    {logementsData.map((logement) => (
        <div className="card-logement" key={logement.id}>
        <Link key={logement.id} to={`/logements/${logement.id}`}>
          <article>
            <img className='card-logement' src={logement.cover} alt={logement.title} />
            <div className='card-logement_flex'>
              <p className='card-logment_overlay'>{logement.title}</p>
            </div>
          </article>
        </Link>
        </div>
      ) )};  
    </div>
  </>
  )
}

export default Card