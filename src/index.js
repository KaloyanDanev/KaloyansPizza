import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App'

import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


const store = createStore(cartReducer);

ReactDom.render(
    <Provider store={store}>
    <Router>
        <Suspense fallback={(<div>Loading...</div>)}>
            <App />
        </Suspense>
    </Router>
    </Provider>,

document.getElementById('root'));