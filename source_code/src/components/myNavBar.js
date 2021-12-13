// myNavBar.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function MyNavBar(props) {
    let navigate = useNavigate();
    let [error, setError] = React.useState(null);

    async function handleClick(e){
        e.preventDefault();
        navigate(props.routes[e.target.id]);
    }

    let out = () => {
        let ans;
        if(props.routes){
            ans = props.routes.map( (item, index) =>
                <button className="buttons" id={index} onClick={handleClick}>{props.labels[index]}</button>
            )
        }
        console.log(props.length);
        return ans;
    }

    return(
        <div>
            {out()}
        </div>
    )
}







// class MyNavBar extends React.component{
//     constructor(props){
//         super(props);
//         this.state = {
//             // insert state here
//             routes: [this.props.routes],
//             labels: [this.props.labels],
//         }
//         //bind functions here
//         this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick(e){
//         e.preventDefault();
//         let navigate = useNavigate();
//         // id's may need to be completely unique, so may need to change the index to another variable name
//         navigate.push(this.state.routes[e.target.id]);
//     }

//     render(){
//         let routes = null;
//         routes = this.state.routes.map( (item, index) =>
//             <button className="buttons" id={index} onClick={this.handleClick}>{this.state.labels[index]}</button>
//         )

//         return (
//             <div className="my_nav_bar">
//                 {routes}
//             </div>
//         );
//     }
// }

export default MyNavBar;
