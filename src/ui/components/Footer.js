import React from 'react';

import '../../css/Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer">
                <div className="footer_container">
                    <div className="rights">
                        <p>All Rights Reserved.</p>
                    </div>
                    <div className="links">
                        <p>Linkedin Link</p>
                        <p>Github Link</p>
                    </div>
                    <div className="back_to_top">
                        <p>Back To Top</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;