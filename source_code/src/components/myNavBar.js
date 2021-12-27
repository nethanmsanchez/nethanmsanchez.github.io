// myNavBar.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React, {useState} from "react";
import MediaQuery from 'react-responsive';
import "../styles/my_nav_bar.css";
import ft_logo from '../images/fantasylogo.png';
import li_logo from '../images/linkedin_logo.png';
import gh_logo from '../images/github_logo.png';

class MyNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            curr: this.props.curr,
        }
        this.introClicked = this.introClicked.bind(this);
        this.bioClicked = this.bioClicked.bind(this);
        this.resumeClicked = this.resumeClicked.bind(this);
        this.cover_letterClicked = this.cover_letterClicked.bind(this);
        this.projectsClicked = this.projectsClicked.bind(this);
    }



    introClicked(){
        this.props.onTabClicked("Intro");
        this.setState({
            title: "Welcome",
            curr: "Intro",
        })
    }

    bioClicked(){
        this.props.onTabClicked("Bio");
        let test = "Bio";

        this.setState({
            title: test,
            curr: test,
        })
    }

    resumeClicked(){
        this.props.onTabClicked("Resume");
        this.setState({
            title: "Resume",
            curr: "Resume",
        });
    }

    cover_letterClicked(){
        this.props.onTabClicked("Cover Letter");
        this.setState({
            title: "Cover Letter",
            curr: "Cover Letter",
        });
    }

    projectsClicked(){
        this.props.onTabClicked("Projects");
        this.setState({
            title: "Projects",
            curr: "Projects",
        });
    }

    render(){
        let title = "nb_title";
        let home = "tab_container";
        let bio = "tab_container";
        let resume = "tab_container";
        let cover_letter = "tab_container";
        let projects = "tab_container";
        if(this.props.curr == ""){
            title = "nb_title";
            home = "tab_container";
            bio = "tab_container";
            resume = "tab_container";
            cover_letter = "tab_container";
            projects = "tab_container";
        } else if(this.props.curr == "Intro"){
            home = home + " nb_i_selected";
        } else if(this.props.curr == "Bio"){
            bio = bio + " nb_b_selected";
        } else if(this.props.curr == "Resume"){
            resume = resume + " nb_r_selected";
        } else if(this.props.curr == "Cover Letter"){
            cover_letter = cover_letter + " nb_c_selected";
            title = "nb_cv_title";
        } else if(this.props.curr == "Projects"){
            projects = projects + " nb_p_selected";
        }

        return (
            <div className="my_nav_bar">
        

                <div className={title}>
                    {this.props.title}
                </div>
                
               
                <div className="nb_nav">
                    <div className={home} onClick={this.introClicked}>
                        <div className="nb_tab" >Intro</div>
                    </div>

                    <div className={bio} onClick={this.bioClicked}>
                        <div className="nb_tab">Bio</div> 
                    </div>

                    <div className={resume} onClick={this.resumeClicked}>
                        <div className="nb_tab">Resume</div>
                    </div>

                    <div className={cover_letter} onClick={this.cover_letterClicked}>
                        <div className="nb_tab">Cover Letter</div>
                    </div>

                    <div className={projects} onClick={this.projectsClicked}>
                        <div className="nb_tab">Projects</div>
                    </div>
                </div>
              
                <div className="nb_links">
                    <a className="nb_link_holder" href="https://salty-fjord-36439.herokuapp.com/">
                        <img className="nb_link" src={ft_logo}></img>
                    </a>

                    <a className="nb_link_holder" href="https://linkedin.com/in/nethan-sanchez-7661ba89">
                        <img className="nb_link_li" src={li_logo}></img>
                    </a>

                    <a className="nb_link_holder" href="https://github.com/nethanmsanchez">
                        <img className="nb_link_gh" src={gh_logo}></img>
                    </a>
                </div>
                
            </div>
        )
    }
}



export default MyNavBar;
