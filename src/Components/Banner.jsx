import '../Styles/Banner.css';

function Banner({imgSrc, text, imgAlt}){
  
  return(
    <>
    <figure className="container">
      <img className="bannerStyle" src={imgSrc} alt={imgAlt} />
      <div className="text-overlay">
         <h2>{text}</h2>
      </div>
    </figure>
    </>
  )
}

export default Banner;