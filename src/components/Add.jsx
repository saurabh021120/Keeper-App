import React from "react";


function Note(props){



  const [title, setTitle] = React.useState('');
  const [content, setContent] = React.useState('');
  

  const addNote = () => {
    const note = {
      key: props.notes.length,
      title,
      content
    }
    props.setNotes([...props.notes, note]);
  }



  return (<div className="note add">
      <p>
        Add New Note
      </p>
      <label>Title</label>
      <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <label>Content</label>
      <input type="text" name="content" id="content" value={content} onChange={(e) => setContent(e.target.value)}/>
      <button onClick={addNote}>Done</button>
      </div>);
}

export default Note;
