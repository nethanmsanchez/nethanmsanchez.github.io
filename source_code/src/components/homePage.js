// homePage.js
// Nethanmsanchez@github.io
// Nethan S
// Created: 12/10/21

import React, { useRef } from "react";
import "../styles/home_page.css";
import MyNavBar from "./myNavBar";
import IntroPage from "./introPage";
import Bio from "./bio";
import Docs from "./docs";
import resumePDF from "../images/resume.pdf";
import cover_letterPDF from "../images/cover_letter.pdf";
import Projects from "./projects";


class HomePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // insert state here
            routes: ["/", "/bio"],
            labels: ["Home", "Bio"],
            intro: "My name is Nethaniel Sanchez, and I have created this site as a place where I can display some things\
            about myself such as interests, goals, experience, and more that can't fit on a one page resume. Additionally it\
            gives me the perfect excuse to show off some of my web development skills at the same time.",
            introRef: React.createRef(),
            bioRef: React.createRef(),
            resumeRef: React.createRef(),
            cover_letterRef: React.createRef(),
            projectsRef: React.createRef(),
            curr: "Intro",
            title: "Welcome",
            pdf: (window.innerWidth*.9),
        }
        //bind functions here
        this.updateScroll = this.updateScroll.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
    }
    
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
    }

    async handleResize(e){
        this.setState({
            pdf: (window.innerWidth*.9),
        })
      
    }

    async updateScroll(curr){
        if(curr == "Intro"){
            window.scrollTo(0, this.state.introRef.current.offsetTop + -50);
        } else if (curr == "Bio"){
            window.scrollTo(0, this.state.bioRef.current.offsetTop + -50);
        } else if (curr == "Resume"){
            window.scrollTo(0, this.state.resumeRef.current.offsetTop - 50);
        } else if (curr == "Cover Letter"){
            window.scrollTo(0,this.state.cover_letterRef.current.offsetTop - 50);
        } else if (curr == "Projects"){
            window.scrollTo(0, this.state.projectsRef.current.offsetTop - 50);
        }
    }

    async handleScroll(e){
        let element = e.target;

        if (0 <= document.documentElement.scrollTop && document.documentElement.scrollTop < (this.state.bioRef.current.offsetTop - 200)){
            this.setState({
                curr: "Intro",
                title: "Welcome",
            });
        } else if ((this.state.bioRef.current.offsetTop - 200) <= document.documentElement.scrollTop && document.documentElement.scrollTop < (this.state.resumeRef.current.offsetTop - 200)){
            this.setState({
                curr: "Bio",
                title: "Bio",
            });
        } else if ((this.state.resumeRef.current.offsetTop - 200) <= document.documentElement.scrollTop && document.documentElement.scrollTop < (this.state.cover_letterRef.current.offsetTop - 200)){
            this.setState({
                curr: "Resume",
                title: "Resume",
            });
        } else if ((this.state.cover_letterRef.current.offsetTop - 200) <= document.documentElement.scrollTop && document.documentElement.scrollTop < (this.state.projectsRef.current.offsetTop - 200)){
            this.setState({
                curr: "Cover Letter",
                title: "Cover Letter",
            });
        } else if ((this.state.projectsRef.current.offsetTop - 200) <= document.documentElement.scrollTop){
            this.setState({
                curr: "Projects",
                title: "Projects",
            });
        } else {
            this.setState({
                curr: "",
                title: "",
            });
        }
    }

    render(){

        return (
            <div className="home_page" onScroll={this.handleScroll}>

                <div className="hp_nav_container">
                    <MyNavBar className="hp_nav" title={this.state.title} curr={this.state.curr} onTabClicked={this.updateScroll} />
                </div>

                <div className="hp_intro_container">
                    <IntroPage className="hp_intro" ref={this.state.introRef}></IntroPage>
                </div>

                <div className="hp_intro_bio_divider"></div>

                <div className="hp_bio_container" ref={this.state.bioRef}>
                    <Bio className="hp_bio"> </Bio>
                </div>

                <div className="hp_bio_resume_divider"></div>

                <div className="hp_resume_container" ref={this.state.resumeRef}>
                    <Docs className="hp_resume" pdf={resumePDF} my_title="Resume" size={this.state.pdf}></Docs>
                </div>

                <div className="hp_resume_cl_divider"></div>

                <div className="hp_cl_container" ref={this.state.cover_letterRef}>
                    <Docs className="hp_resume" pdf={cover_letterPDF} my_title="Cover Letter" size={this.state.pdf}></Docs>
                </div>

                <div className="hp_cl_proj_divider"></div>

                <div className="hp_proj_container" ref={this.state.projectsRef}>
                    <Projects />
                </div>

            </div>
        )
    }
}

export default HomePage;





































