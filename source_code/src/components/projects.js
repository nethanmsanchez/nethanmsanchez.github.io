




import React from 'react';
import "../styles/projects_page.css";
import strings from "../strings";


class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        // bind functions here
    }

    render(){
        return(
            <div className='p_container'>
                <div className='p_title'>Projects</div>

                <div className='p_row_title'>Personal Website</div>

                <div className="p_row">

                    <h2 className="p_row_what">Why</h2>
                    
                    <p className="p_row_text">{strings[9]}</p>
                    
                </div>

                <div className="p_row">
                    
                    <h2 className="p_row_what">How</h2>
                   
                    <p className="p_row_text">{strings[10]}</p>
                    
                </div>

                <div className="p_row_last">
            
                    <h2 className="p_row_what">Exp</h2>
                    
                    <p className="p_row_text">{strings[11]}</p>

                </div>

                <div className='p_row_title'>Fantasy Trade Analyzer</div>

                <div className="p_row">

                    <h2 className="p_row_what">Why</h2>

                    <p className="p_row_text">{strings[12]}</p>

                </div>

                <div className="p_row">

                    <h2 className="p_row_what">How</h2>

                    <p className="p_row_text">{strings[13]}</p>

                </div>

                <div className="p_row_last">

                    <h2 className="p_row_what">Exp</h2>

                    <p className="p_row_text">{strings[14]}</p>

                </div>

                <div className='p_row_title'>Waste Assessment Application</div>

                <div className="p_row">

                    <h2 className="p_row_what">Why</h2>

                    <p className="p_row_text">{strings[15]}</p>

                </div>

                <div className="p_row">

                    <h2 className="p_row_what">How</h2>

                    <p className="p_row_text">{strings[16]}</p>

                </div>

                <div className="p_row">

                    <h2 className="p_row_what">Exp</h2>

                    <p className="p_row_text">{strings[17]}</p>

                </div>
            </div>
        )
    }
}

export default Projects;