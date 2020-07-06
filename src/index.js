import React, { Suspense } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App'

ReactDom.render(

    <Router>
        <Suspense fallback={(<div>Loading...</div>)}>
            <App />
        </Suspense>
    </Router>,

    document.getElementById('root'));