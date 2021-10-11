import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Add from './Add';

function App() {

    const [notes, setNotes] = React.useState([]);

    return (
        <div>
            <Header />
            {notes.map(note => {
                return (<Note
                    title={note.title}
                    content={note.content}
                />);
            })
            }
            <Add notes={notes} setNotes={setNotes}/>
            <Footer />
        </div>
    );

}

export default App;
