import "../Styles/Host.css";

function Host(props){

  return(
    <>
    <aside className="flexHost">
      <div className="flexHostName">
        {props.name}
      </div>
      <div>
        <img className="imgForm" src={props.img} alt={props.alt} />
      </div>
      
    </aside>
    </>
  )
}

export default Host