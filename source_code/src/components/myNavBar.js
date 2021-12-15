// myNavBar.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React from "react";
import MyLink from "./myLink";
import "../myStyles.css";

class MyNavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: this.props.title,
            page: this.props.page,
        }
    }




    render(){
        let home;
        let bio;
        if(this.state.page == "Welcome"){
            home = "selected";
            bio = "";
        } else if(this.state.page == "Bio"){
            home = "";
            bio = "selected";
        }

        return (
            <div className="my_nav_bar">
                <div className="nb_spacer1"></div>
                <h1 className="nb_title">
                    {this.state.title}
                </h1>
                <div className="nb_spacer1"></div>
                <div className="nb_spacer1"></div>
                <div className="nb_nav">
                    <MyLink curr={home} route="/" label="Home" />
                    <MyLink curr={bio} route="/bio" label="Bio" /> 
                </div>
                <div className="nb_spacer1"></div>
                <div className="nb_links">
                    <a href="https://salty-fjord-36439.herokuapp.com/">My Site</a>
                </div>
                <div className="nb_spacer1"></div>
            </div>
        )
    }
}



export default MyNavBar;
