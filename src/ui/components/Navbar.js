import React from 'react';

import '../../css/Navbar.scss';

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar" className="navigationbar">
                <div className="navigationbar_container">
                    <div className="navigationbar_page">
                        <p>Home</p>
                    </div>
                    <div className="navigationbar_page">
                        <p>
                            Library Management System
                        </p>
                    </div>
                    <div className="navigationbar_page">
                        <p>Small Projects</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;