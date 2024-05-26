import React from 'react';

import '../../css/Header.scss';

/*
<div className="meteor-16"></div>
<div className="meteor-17"></div>
<div className="meteor-18"></div>
<div className="meteor-19"></div>
<div className="meteor-20"></div>
<div className="meteor-21"></div>
<div className="meteor-22"></div>
<div className="meteor-23"></div>
<div className="meteor-24"></div>
<div className="meteor-25"></div>
<div className="meteor-26"></div>
<div className="meteor-27"></div>
<div className="meteor-28"></div>
<div className="meteor-29"></div>
<div className="meteor-30"></div>
<div className="meteor-31"></div> 
*/

class Header extends React.Component {
    render() {
        return(
            <div id="header" className="header">
                <div className="star"></div>
                <div className="meteor-1"></div>
                <div className="meteor-2"></div>
                <div className="meteor-3"></div>
                <div className="meteor-4"></div>
                <div className="meteor-5"></div>
                <div className="meteor-6"></div>
                <div className="meteor-7"></div>
                <div className="meteor-8"></div>
                <div className="meteor-9"></div>
                <div className="meteor-10"></div>
                <div className="meteor-11"></div>
                <div className="meteor-12"></div>
                <div className="meteor-13"></div>
                <div className="meteor-14"></div>
                <div className="meteor-15"></div>

                 

                <div className="header_container">
                    <div className="header_items">
                        <div className="header_title">
                            <h1>Welcome to my Portfolio Site!</h1>
                        </div>
                        <div className="header_description">
                            <p style={{fontSize: 22}}>A small page to showcase my projects.</p>
                        </div>
                        <div className="header_icons">
                            <a href={"https://github.com/K-Kocak"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a>
                            <a href={"https://www.linkedin.com/in/kemal-kocak-951982247/"} target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                            
                        </div>
                    </div>
                </div>
                <div className="divider"></div>
            </div>
        )
    }
}

export default Header;