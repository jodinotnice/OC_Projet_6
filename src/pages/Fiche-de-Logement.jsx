import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../logements.json';
import CollapseButton from '../Components/CollapseButton.jsx'
import Tags from '../Components/Tags.jsx';
import Rates from '../Components/Rates.jsx';
import Host from '../Components/Host.jsx'
import Slideshow from '../Components/Slideshow.jsx'
import "../Styles/FicheDeLogement.css"



function FicheLogement(){

    const params = useParams();
    const logementId = params.id;
    const logement = logementsData.find((logement) => logement.id === logementId);
    const slides = logement.pictures.map(picture => ({ url: picture }));

    console.log(slides);

    /*{logement.pictures.map((picture, index) => (
      <img key={index} src={picture} alt={'Photo ${index + 1}'} />
    ))}*/

    return(
        <>
    <div>
            <div className="slideshowContainer">
                <Slideshow slides={slides} />
            </div>
              
              <div className="flexContainer">
                <div className="flexTitleLoc">
                  <h3>{logement.title}</h3>
                  <p>{logement.location}</p>
                </div>

                <div className="flexHostName">
                  <p>{logement.host.name}</p>
                  <Host img={logement.host.picture} alt={logement.host.name}/>
                </div>
              </div>

              <div className="flexRateTags">
              <Tags tag={logement.tags} />
              <Rates rate={logement.rating} />
              </div>
              
              <div class="flex-collapse">
                <div className="collapseParent">
                  <CollapseButton  label={"Description"} content={logement.description}/>
                </div>
                <div className="collapseParent">
                  <CollapseButton label={"Equipements"} content={logement.equipments} />
                </div>
              </div>
             </div>
        </>
        
             )
}


export default FicheLogement