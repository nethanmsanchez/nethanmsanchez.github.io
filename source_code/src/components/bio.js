// bio.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React, { useRef } from "react";
import "../styles/bio_page.css";
import pic from "../images/profile.jpg";
import beach_pic from "../images/Snapchat_beach.jpg";
import opers_pic from "../images/Snapchat_opers.jpg";
import strings from "../strings";
import Carousel from "react-bootstrap/Carousel";
import 'bootstrap/dist/css/bootstrap.css';


class Bio extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // insert state here
            temp: null,
        }
        //bind functions here
    }



    render(){

        return (
            <div className="b_bio_container">
                <div className="b_title">Bio</div>

                <div className="b_row">

                    <div className="b_col">
                        <div className="b_section_title">General</div>
                        <p className="b_text">{strings[0]}</p>
                    </div>
 
                    {/*<div className="b_carousel_container">
                        <Carousel>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100 b_carousel" src={pic} alt="prof pic" />
                                <Carousel.Caption>
                                    <p> this is a picture</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item interval={2000}>
                                <img className="d-block w-100 b_carousel" src={beach_pic} alt="prof pic" />
                                <Carousel.Caption>
                                    <p> this is another picture</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    */}
                    

                </div>

                <div className="b_row">

                {/*
                <div className="b_carousel_container">
                    <Carousel>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100 b_carousel" src={opers_pic} alt="prof pic" />
                            <Carousel.Caption>
                                <p> this is a picture</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={2000}>
                            <img className="d-block w-100 b_carousel" src={beach_pic} alt="prof pic" />
                            <Carousel.Caption>
                                <p> this is another picture</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
                */}

                    <div className="b_col">
                        <div className="b_section_title">Hobbies</div>
                        <p className="b_text">
                            <span className="bold">Sports:</span>{strings[1]}
                            {<br></br>} {<br></br>}
                            <span className="bold">Reading:</span>{strings[2]}
                            {<br></br>} {<br></br>}
                            <span className="bold">Cooking:</span>{strings[3]}
                            {<br></br>} {<br></br>}
                            <span className="bold">Watching:</span>{strings[4]}
                        </p>
                    </div>
                        
                </div>

                
                <div className="b_row">

                    <div className="b_col">
                        <div className="b_section_title">Education</div>
                        <p className="b_text">
                        <span className="bold">Elementary:</span>{strings[5]}
                            {<br></br>} {<br></br>}
                            <span className="bold">Middle:</span>{strings[6]}
                            {<br></br>} {<br></br>}
                            <span className="bold">High:</span>{strings[7]}
                            {<br></br>} {<br></br>}
                            <span className="bold">UCSC:</span>{strings[8]}
                        </p>
                    </div>

                    {/*
                    <div className="b_carousel_container">
                        <div className="b_carousel_holder">Carousel Holder</div>
                    </div>
                    */}

                </div>

            </div>
        )
    }
}

export default Bio;