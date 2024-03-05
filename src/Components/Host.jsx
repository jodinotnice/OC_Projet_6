import "../Styles/Host.css"

function Host(props){

  return(
    <>
    <aside>
      <img className="imgForm" src={props.img} alt={props.alt} />
    </aside>
    </>
  )
}

export default Host