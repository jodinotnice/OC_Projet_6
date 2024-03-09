import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


function CollapseButton ({label,content}) {

  const angle = <FontAwesomeIcon icon={faAngleUp} />;

  const angleDown = <FontAwesomeIcon icon={faAngleDown} />;

  const [selected, setSelected] = useState(false)


  return(
    <>
    <div className="item"> 
               <div className="title" >
                  <h2>{label}</h2>
                  <span onClick={() => setSelected(!selected)}>{selected ? angleDown : angle}</span>
               </div>
               <div className={selected ? 'content show' : 'content'}>
               <ul>
                  {Array.isArray(content) ? (
                    content.map((item,index) => (
                      <li key={index}>{item}</li>
                    ))
                  ) : (
                    <li>{content}</li> // Affiche simplement le contenu si ce n'est pas un tableau
                  )}
                </ul>
               </div>
    </div>
    </>
  )
}

export default CollapseButton