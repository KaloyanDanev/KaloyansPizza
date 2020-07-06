import React from 'react';
import { Route, Switch } from 'react-router-dom';

import styles from './App.css';
import { Navbar, Footer, Home, Menu } from "./components";

class App extends React.Component {

    render() {
        return (
                <div className={styles}>
                <Navbar/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/menu" component={Menu}/>
                </Switch>
                    <Footer/>

                </div>
        );
    }
}

export default App;