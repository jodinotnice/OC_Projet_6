import React from 'react';
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logementsData from '../logements.json';
import CollapseButton from '../Components/CollapseButton.jsx'
import Tags from '../Components/Tags.jsx';
import Rates from '../Components/Rates.jsx';
import Host from '../Components/Host.jsx';
import Slideshow from '../Components/Slideshow.jsx';
import "../Styles/FicheDeLogement.css"



function FicheLogement(){
    const params = useParams();
    const navigate = useNavigate();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            const logementId = params.id;
            const selectedLogement = logementsData.find((logement) => logement.id === logementId);
            if (!selectedLogement) {
                navigate("/erreur");
            } else {
                setLogement(selectedLogement);
            }
        };

        fetchData();
    }, [params.id, navigate]);

    if (!logement) {
        return null; 
    }

    const slides = logement.pictures.map(picture => ({ url: picture }));

    
    return(
        <>
    <div className="big-container">
            <div className="slideshowContainer">
                <Slideshow slides={slides} />
            </div>

            <section className="flexContainer">
              <div>
                  <div className="flexTitleLoc">
                      <h1>{logement.title}</h1>
                      <p>{logement.location}</p>
                  </div>
                    
                  <div className="flexTags">
                    <Tags tag={logement.tags} />
                  </div>
              </div>

              <div className="flexHostNameRate">
                <div className="flexFlexflex">
                  <Host name={logement.host.name} img={logement.host.picture} alt={logement.host.name}/>

                  <div className="flexRate">
                  <Rates rate={logement.rating} />
                </div>
                </div>
                    
              </div>
             </section>
             <div className="flex-collapse">
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


