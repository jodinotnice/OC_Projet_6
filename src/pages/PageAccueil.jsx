import Banner from '../Components/Banner.jsx';
import Card from '../Components/Card.jsx';
import BannerImg from '../assets/IMG.svg'


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