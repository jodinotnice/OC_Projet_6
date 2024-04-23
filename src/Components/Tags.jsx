import "../Styles/Tags.css"

function Tags(props){

  const tags = props.tag;

  return(
    <>
    <div className="flexTags">
      {tags.map((tag, index) => (
        <p key={index} className="tagsForm">{tag}</p>
      )) 
        }
      
    </div>
    </>
  )
}

export default Tags