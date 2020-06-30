import React from 'react';

import styles from './App.css';
import { Home, Navbar, Cards } from "./components";

class App extends React.Component {

    render() {
        return (
                <div className={styles.container}>
                <Navbar/>
                <Home/>
                <Cards/>
            </div>
        );
    }
}

export default App;