import React from 'react';

import '../../css/LibMagSys.scss'
import DashboardPicture from '../../images/DashboardFormPicture.png';

class LibMagSys extends React.Component {
    render() {
        return (
            <div id="libmagsys" className="libmagsys">
                <div className="libmagsys_container">
                    <div className="project_div project_picture"><img src={DashboardPicture} alt="Dashboard_Picture"></img></div>
                    <div className="project_div github_icon"><a href={"https://github.com/K-Kocak/LibraryManagementSystemProject"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a></div>
                    <div className="project_div project_description"><p className="project_description_title">Library Management System</p>
                    <p className="project_description_content">A Library Management System for managing a database of books with its authors and genres stored, and allowing these books to be issued to members as well as manage returned and lost books from members, made with <span>C#</span> and <span>MySQL.</span></p>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default LibMagSys;