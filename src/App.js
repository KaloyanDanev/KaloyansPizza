import React from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './App.css';
import { NavigationBar, Footer, Home, Menu, Cart } from "./components";

class App extends React.Component {

    render() {
        return (
                <div className={styles}>
                <NavigationBar/>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/menu" component={Menu}/>
                    <Route exact path="/cart" component={Cart}/>
                        </Switch>
                    <Footer/>

                </div>
        );
    }
}

export default App;