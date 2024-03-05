import "../Styles/Rating.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Rates(props){

  const stars = <FontAwesomeIcon className="coralStar" icon={faStar} />;

  const unStar = <FontAwesomeIcon className="unStar" icon={faStar} />;

  const starsArray = [];

  for (let i = 0; i < 5; i++) {
    starsArray.push(i < props.rate ? stars : unStar);
  }

  return(
    <>
    <div>
    {starsArray.map((star, index) => (
        <span key={index}>{star}</span>
      ))}
    </div>
    </>
  )
}

export default Rates