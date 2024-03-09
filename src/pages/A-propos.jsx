import CollapseButton from '../Components/CollapseButton.jsx';
import Banner from '../Components/Banner.jsx';
import Kalen from '../assets/kalen.svg';
import '../Styles/Banner.css';
import "../Styles/Test.css";

function APropos(){

   const data = [
      {
         id: 0,
         label: "Fiabilité",
         content:
            
               "Les annonces postées sur Kasa garantissent une fiabilité totale."
            
         ,
      },
      {
         id: 1,
         label: "Respect",
         content:
            
               "Les annonces postées sur Kasa garantissent une fiabilité totale."
            
         ,
      },
      {
         id: 2,
         label: "Service",
         content: 
            
               "Les annonces postées sur Kasa garantissent une fiabilité totale."
           
         ,
      },
      {
         id: 3,
         label: "Sécurité",
         content:
            
            "Les annonces postées sur Kasa garantissent une fiabilité totale."
         
        ,
      },
   ]



   return(
<>
   <main>
      <div className="main-container">
         <Banner imgSrc={Kalen} imgAlt={"Banniere page A propos"}/>
            <div className='accordion'>
          {data.map((item) => (
            <CollapseButton label={item.label} content={item.content} key={item.id}/>
          ))}  
         </div>
      </div>

   </main>
</>
   )
};

export default APropos