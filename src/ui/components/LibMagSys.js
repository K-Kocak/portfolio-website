import React from 'react';

import '../../css/LibMagSys.scss'

class LibMagSys extends React.Component {
    render() {
        return (
            <div id="libmagsys" className="libmagsys">
                <div className="libmagsys_container">
                    <div className="project_div project_picture"><p>An Image will be here</p></div>
                    <div className="project_div github_icon"><p>The github icon will be here</p></div>
                    <div className="project_div project_description"><p>Project title goes here</p>
                    <p>Project description goes here</p></div>
                </div>
            </div>
        )
    }
}

export default LibMagSys;