import React from 'react';

import '../../css/SmallProjects.scss'

import Clock from '../../images/sessiontimerPicture.png';
import TicTacToe from '../../images/UILayoutPicture.png';
import Calculator from '../../images/continuedequationp2Picture.png';
import Tenzies from '../../images/inprogressPicture.png';
import QuoteMachine from '../../images/a quote.png';
import DrumMachine from '../../images/drumMachinePicture.png';
import SquareGame from '../../images/gameplayPicture.png';
import MarkdownPreviewer from '../../images/example.png'

class SmallProjects extends React.Component {

    slideDescriptionOut(event) {
        console.log(event.currentTarget);
        const idNumber = event.currentTarget.className.length === 14 ? event.currentTarget.className.slice(-1) : event.currentTarget.className.slice(-2);
        console.log(idNumber);

        document.querySelector(".project_description_" + idNumber).style.animation = 'slide 1s cubic-bezier(.14,.3,.42,.99) 1 forwards';
        
    }

    render(){
        return(
            <div id="smallprojects" className="smallprojects">
                
                <div className="smallprojects_container">
                    <h1>Small Projects Gallery</h1>
                    <span>(Click on the picture of the small project to learn what it's about.)</span>
                    <div className="projects_row">

                        <div className="project_item">
                            <div onClick={this.slideDescriptionOut}className="project_item_1">
                                <img src={Clock} alt="25+5 Clock"></img>
                                 
                            </div>
                            <div className="project_description_1">
                                <p>It is a 25+5 Clock. You do whatever task you have in mind during the "session" length, then take "breaks" for the selected amount of time.</p>
                                    
                            </div>  
                            <a href={"https://github.com/K-Kocak/25-plus-5-Clock"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a>    
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>

                        </div>

                        <div className="project_item">
                            <div onClick={this.slideDescriptionOut}className="project_item_2">
                                <img src={TicTacToe} alt="TicTacToe"></img>
                                
                            </div>
                            <div className="project_description_2">
                                <p>It's TicTacToe, but with a smarter computer that will try to prevent you from winning as well as checking if it itself can win on its next move.</p>
                            </div>  
                            <a href={"https://github.com/K-Kocak/TicTacToe"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a> 
                            <span className="csharp">C#</span>
                        </div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item">
                            <div onClick={this.slideDescriptionOut}className="project_item_3">
                                <img src={Calculator} alt="Calculator"></img>
                                
                            </div>
                            <div className="project_description_3">
                                <p>It's your usual Calculator App, but with a bit more advanced display for your equations and being able to chain equations together, made in JavaScript plus React.</p>    
                            </div>  
                            <a href={"https://github.com/K-Kocak/Javascript-Calculator"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a> 
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>                           
                        </div>
                        <div className="project_item">
                        <div onClick={this.slideDescriptionOut}className="project_item_4">
                                <img src={Tenzies} alt="Tenzies"></img>
                                 
                            </div>
                            <div className="project_description_4">
                                <p>The Tenzi dice game made with JavaScript and React, where your goal is to have all ten die be the same number to win.</p>
                            </div> 
                            <a href={"https://github.com/K-Kocak/tenzies"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a> 
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>
                        </div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item">
                            <div onClick={this.slideDescriptionOut}className="project_item_5">
                                <img src={SquareGame} alt="Eat the coloured circle"></img>
                                 
                            </div>
                            <div className="project_description_5">
                                <p>A simple game where you must eat the balls that are of one particular colour, while avoiding the all the other balls of different colour.</p>    
                            </div>   
                            <a href={"https://github.com/K-Kocak/SquareEatGame"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a>  
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>                        
                        </div>
                        <div className="project_item">
                        <div onClick={this.slideDescriptionOut}className="project_item_6">
                                <img src={DrumMachine} alt="Drum Machine"></img>
                                
                            </div>
                            <div className="project_description_6">
                                <p>A drum machine where clicking on the lettered buttons will play a drum sound. This also supports keyboard input aswell.</p>
                            </div>  
                            <a href={"https://github.com/K-Kocak/Drum-Machine"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a> 
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>
                        </div>                  
                    </div>
                    <div className="projects_row">
                        <div className="project_item">
                            <div onClick={this.slideDescriptionOut}className="project_item_7">
                                <img src={QuoteMachine} alt="Random Quote Machine"></img>
                                
                            </div>
                            <div className="project_description_7">
                                <p>A random quote machine. It displays a random quote and who said it from an API, with a button to get new quotes and to tweet the quote.</p>    
                            </div>     
                            <a href={"https://github.com/K-Kocak/Random-Quote-Machine"} target="_blank" rel="noreferrer"><i className="fa-brands fa-github" ></i></a>   
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>                      
                        </div>
                        <div className="project_item">
                        <div onClick={this.slideDescriptionOut}className="project_item_8">
                                <img src={MarkdownPreviewer} alt="HTML Markdown Previewer"></img>
                                
                            </div>
                            <div className="project_description_8">
                                <p>A Markdown Previewer with an editor window to place your plain text with a Preview window to view the results of your plain text in Markdown.</p>
                            </div>  
                            <a href={"https://codepen.io/Cyonic1/pen/RwmwbKv"} target="_blank" rel="noreferrer"><i className="fa fa-codepen"></i></a> 
                            <i className="fab fa-js"></i>    
                            <i className="fa-brands fa-react"></i>
                        </div>                  
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default SmallProjects;