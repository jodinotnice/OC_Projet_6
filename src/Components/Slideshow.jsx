import "../Styles/Slideshow.css";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Slideshow({slides}) {

  const chevronL = <FontAwesomeIcon icon={faChevronLeft} />;
  const chevronR  = <FontAwesomeIcon icon={faChevronRight} />;

  const [currentPicture, setCurrentPicture] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };

  const slideStyles = {
    marginTop: "30px",
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentPicture].url})`,
  };

  const goToPrevious = () => {

    const isFirstSlide = currentPicture === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentPicture - 1;
    setCurrentPicture(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentPicture === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentPicture + 1;
    setCurrentPicture(newIndex)
  }

  return (
    <>
      <div style={sliderStyles}> 
        <div className="rChevronStyle" onClick={goToPrevious}>{chevronL}</div>
          <div style={slideStyles}></div>
        <div className="lChevronStyle" onClick={goToNext}>{chevronR}</div>
      </div>
    </>
  );
}

export default Slideshow