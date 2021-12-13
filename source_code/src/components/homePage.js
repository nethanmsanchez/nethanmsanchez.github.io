// homePage.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React from "react";
import MyNavBar from "./myNavBar";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // insert state here
            routes: ["/", "/bio"],
            labels: ["Home", "Bio"],
        }
        //bind functions here
    }



    render(){

        return (
            <div className="home_page">
                <MyNavBar routes={this.state.routes} labels={this.state.labels} />
                <h1>Hello You are in the home page!!!!!!!!!!!!</h1>
            </div>
        )
    }
}

export default HomePage;




