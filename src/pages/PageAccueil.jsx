import Banner from '../Components/Banner.jsx';
import Card from '../Components/Card.jsx';
import BannerImg from '../assets/IMG.svg';
import '../Styles/Banner.css';
import '../Styles/index.css';


function FichesLogements(){
 
  return(
    <>
    <main>
    <Banner imgSrc={BannerImg} text={"Chez vous, partout et ailleurs"} alt={"Banniere"} />
    <Card />
    </main>
    </>
  )
}

export default FichesLogements