import React from 'react';

import styles from './App.css';
import { Navbar, Footer, Home, Cards, Favorite } from "./components";

class App extends React.Component {

    render() {
        return (
                <>
                <Navbar/>
                <Home/>
                <Favorite/>
                <Footer/>
            </>
        );
    }
}

export default App;