import React from "react";
import ReactDOM from "react-dom";  
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Add from './Add';
import Login from './Login';
import NavBar from "./NavBar";
import Routes from '../routes/index';

function App() {

    const [notes, setNotes] = React.useState([]);

    return (
        <div>
            <NavBar/>
            <Header />
            <Router>
                <Routes/>
            </Router>
            <Footer />
        </div>
    );

}

export default App;
