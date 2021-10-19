import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from '../components/Login';
import Add from '../components/Add';
import Note from '../components/Note';

const Routes = () => {

    const [notes, setNotes] = React.useState([]);

    return (
        <div>
            <Switch>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/add' >
                {notes.map(note => {
                return (<Note
                    title={note.title}
                    content={note.content}
                    notes={notes}
                    setNotes={setNotes}
                />);
            })
            }
                <Add notes={notes} setNotes={setNotes}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;