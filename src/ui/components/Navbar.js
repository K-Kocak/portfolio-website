import React from 'react';

import '../../css/Navbar.scss';

class Navbar extends React.Component{
    render(){
        return(
            <div id="navbar" className="navigationbar">
                <div className="navigationbar_container">
                    <a href="#header">
                        <div className="navigationbar_page">
                            <p>Home</p>
                        </div>
                    </a>
                    <a href="#libmagsys">
                        <div className="navigationbar_page">
                            
                                <p>
                                    Library Management System
                                </p>
                            
                        </div>
                    </a>
                    <a href="#smallprojects">
                        <div className="navigationbar_page">
                            <p>Small Projects</p>
                        </div>
                    </a>
                </div>
                
            </div>
        );
    }
}

export default Navbar;