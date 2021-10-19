import React from "react";

function Note(props){
    const [notes, setNotes] = React.useState([]);


    return (<div className="note">  
    <h1> {props.title} </h1>
      <p>
          {props.content}
      </p>
      <button>Delete Note</button>
      </div>);
}

export default Note;