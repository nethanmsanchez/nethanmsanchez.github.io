




import React, { useRef } from "react";
import "../styles/intro_page.css";
import profile_pic from "../images/profile.jpg";

class IntroPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            intro: "My name is Nethaniel Sanchez, and this is my personal site where you can find out a little bit \
            about myself such as my background, interests, goals, experience, and more that don't necessarily fit on a traditional \
            one page resume. I hope you enjoy your look around and get to know a little bit about me.",
        }
    }

    render(){

        return (
            <div className="ip_intro_container">

                <div className="ip_title">Welcome</div>

                <div className="ip_row">

                    <div className="ip_spacer"></div>

                    <div className="ip_profpic_container">
                        <img className="ip_profpic" src={profile_pic} alt="Profile Picture" />
                    </div>

                    <div className="ip_spacer"></div>

                    <div className="ip_text_container">
                        <p className="ip_intro">{this.state.intro}</p>
                    </div>

                    <div className="ip_spacer"></div>

                </div>

            </div>
        )
    }
}

export default IntroPage;