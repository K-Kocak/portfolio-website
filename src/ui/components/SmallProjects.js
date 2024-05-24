import React from 'react';

import '../../css/SmallProjects.scss'
import Clock from '../../images/sessiontimerPicture.png';

class SmallProjects extends React.Component {
    render(){
        return(
            <div id="smallprojects" className="smallprojects">
                <div className="smallprojects_container">
                    <div className="projects_row">
                        <div className="project_item">
                            <div className="project_item_1">
                                <img src={Clock} alt="25+5 Clock"></img>
                            </div>
                            <div className="project_description_1">
                                <p>It is a 25+5 Clock. You do whatever task you have in mind during the "session" length, then take "breaks" for the selected amount of time.</p>
                                </div>    
                        </div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item"><p>Hi</p></div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item"><p>Hi</p></div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item"><p>Hi</p></div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item"><p>Hi</p></div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item"><p>Hi</p></div>
                        <div className="project_item"><p>Hi 2</p></div>                  
                    </div>
                </div>
            </div>
        )
    }
}

export default SmallProjects;