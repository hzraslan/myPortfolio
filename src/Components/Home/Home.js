import React from 'react';
import './home.css';
import linkedinPng from '../../assets/linkedin.png';
import githubLogo from '../../assets/githubLogo.png';
import { logosLanguages } from '../../assets/languages/import.ts';
import { logosFrames } from '../../assets/framworks/import.ts';
import { logosWorks, logoComp } from '../../assets/projects/import.ts';
const w = window;
export default class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render () {
        return (
            <div className="container-home">
                <div className="header-home">
                    <p className="name-wrap">Hi, I am Hizir Aslan</p>
                    <p className="title-wrap">I am a Full Stack Developer</p>
                    <div className="links-external">
                        <img className="linkedin-link" src={linkedinPng} alt="" onClick={(e)=> w.open('https://www.linkedin.com/in/hizir-aslan-14762846/')}></img>
                        <img className="github-link" src={githubLogo} alt="" onClick={(e)=> w.open('https://github.com/hzraslan')}></img>
                        <p className="email-text" onClick={ (e) => w.location.href = 'mailto: hzraslan@gmail.com'}>hzraslan@gmail.com</p>
                    </div>
                </div>
                <div className="content-wrap">
                    <div className="left-wrapper">
                        <p>Works and Projects</p>
                        <div className="company-wrap">
                            <div className="inner-flex-comp">
                            {
                                    logoComp.map((logo, key) =>{
                                        return(
                                            <img className="comp-logos" src={logo} alt="" key={key.toString()}></img>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="projects-wrap">
                            {
                                    logosWorks.map((logo, key) =>{
                                        return(
                                            <img className="project-logos" src={logo} alt="" key={key.toString()}></img>
                                        )
                                    })
                                }
                        </div>
                    </div>
                    <div className='right-wrapper'>
                        <div className="languages-i-know-container">
                            <p>Languages I use</p>
                            {
                                logosLanguages.map((logo, key) =>{
                                    return(
                                        <img className="lang-logos" src={logo} alt="" key={key.toString()}></img>
                                    )
                                })
                            }
                        </div>
                        <div className="frameworks-and-tools">
                            <p>Frameworks and tools I use</p>
                            {
                                logosFrames.map((logo, key) =>{
                                    return(
                                        <img className="lang-logos" src={logo} alt="" key={key.toString()}></img>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}