import React from 'react';

import logo from '../../images/brand/logo_transparent.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container text-center">

                    <img className="brand-logo" src={logo} alt="Logo"/>
                        <h2 className="text-white">Kaloyan's Pizza</h2>
                        <p className="lead text-light">Just Great Pizza!</p>
                        <p className="copy-text text-light">Copyright &copy; 2020 Kaloyan's Pizza, Inc. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}
export default Footer;
