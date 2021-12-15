// homePage.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React from "react";
import MyNavBar from "./myNavBar";
import MyLink from "./myLink";
import "../myStyles.css";
import profile_pic from "../images/profile.jpg";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // insert state here
            routes: ["/", "/bio"],
            labels: ["Home", "Bio"],
            intro: "My name is Nethaniel Sanchez, and I created this site to be a place where I can display some things\
            about myself such as interests, goals, experience, and more that can't fit on a one page resume. Additionally it\
            gives me the perfect excuse to show off some of my web development skills at the same time.",
        }
        //bind functions here
        let intro = "Hello there! Welcome to my personal website!";
    }

    render(){

        return (
            <div className="home_page">
                <MyNavBar className="hp_nav" title="Home" page="Welcome"/>
                <div className="hp_spacer"></div>
                <div className="hp_profpic_container">
                    <img className="hp_profpic" src={profile_pic} />
                </div>
                <div className="hp_spacer"></div>
                <div className="hp_spacer"></div>
                <div className="hp_intro_container">
                    <h2 className="hp_intro_title">Welcome to My Personal Site!</h2>
                    <p className="hp_intro">{this.state.intro}</p>
                </div>
            </div>
        )
    }
}

export default HomePage;




