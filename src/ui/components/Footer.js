import React from 'react';

import '../../css/Footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <div id="footer" className="footer">
                <div className="footer_container">
                    
                    <div className="links">
                    <a href={"https://github.com/K-Kocak"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a>
                    <a href={"https://www.linkedin.com/in/kemal-kocak-951982247/"} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                    </div>
                    <div className="back_to_top">
                        <a href="#header">Back To Top</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;