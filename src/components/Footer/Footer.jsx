import React from 'react';

import logo from '../../images/brand/logo_transparent.png';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container text-center">

                    <img className="brand-logo" src={logo} alt="Logo"/>
                        <p className="display-4 text-white">Kaloyan's Pizza</p>
                        <p className="lead text-light">Just Great Pizza!</p>
                        <p className="copy-text text-light">Copyright &copy; 2020 Kaloyan's Pizza, Inc. All rights reserved.</p>
                </div>
            </footer>
        );
    }
}
export default Footer;
