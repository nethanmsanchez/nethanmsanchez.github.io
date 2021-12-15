// myLink.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/13/21

import React from "react";
import { useNavigate } from "react-router-dom";

function MyLink(props) {
    let navigate = useNavigate();

    async function handleClick(e){
        e.preventDefault();
        navigate(props.route);
    }

    // let out = () => {
    //     let ans;
    //     if(props.routes){
    //         ans = props.routes.map( (item, index) =>
    //             <button className="buttons" id={index} onClick={handleClick}>{props.label}</button>
    //         )
    //     }
    //     console.log(props.length);
    //     return ans;
    // }

    let cname;
    if(props.curr == "selected"){
        cname = "l_button l_selected";
    } else if (props.curr == ""){
        cname = "l_button";
    }

    return(

        <div className={cname} onClick={handleClick}>{props.label}</div>

    )
}


export default MyLink;
