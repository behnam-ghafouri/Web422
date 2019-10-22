import React from 'react';
import moment from 'moment';
import {Link} from 'react-router-dom';
class ProjectPanle extends React.Component {
    
    constructor(props){
        super(props);
        this.state = { projects: [] };
        this.componentDidMount=this.componentDidMount.bind(this);
    }

    componentDidMount() {
        fetch("https://web422database.herokuapp.com/projects") 
        .then(res => res.json())
        .then(returnedData => {this.setState({ projects: returnedData});})
        .catch(err => { console.log(err);});
    }

    render(){ return(

        <div className="panel panel-default">
        <div className="panel-heading">
            <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
            <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
            <tbody>
                {this.state.projects.map((data,index)=>{
                       return(
                            <tr key = {data._id} >
                            <td>{data.ProjectName}</td>
                            <td>{moment( data.ProjectEndDate || new Date()).diff((data.ProjectStartDate),'days')}</td>
                            </tr> 
                        )
                })}
            </tbody>
            </table>
            </div>
            <Link to="/projects" className="btn btn-primary form-control">View All Project Data</Link>
        </div>
        </div>
    
    )}
}

export default ProjectPanle;