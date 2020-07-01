import React from 'react';

import styles from './App.css';
import { Home } from './pages';
import { Navbar, Cards, Favourites } from "./components";

class App extends React.Component {

    render() {
        return (
                <>
                <Navbar/>
                <Home/>
                <Favourites/>
                <Cards/>
            </>
        );
    }
}

export default App;