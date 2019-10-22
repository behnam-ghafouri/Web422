import React from 'react';
import MainContainer from './MainContainer'
import moment from 'moment'
class Projects extends React.Component{

    constructor(props){
        super(props)
        this.state = { projects: [] }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetch('https://web422database.herokuapp.com/projects')
        .then(res => res.json())
        .then(returnenData => { this.setState({ projects: returnenData})})
        .catch(err => {console.log(err)})
    }

    render(){return(
        <MainContainer sidebar="Projects">
             <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <tbody>
                    <tr>
                        <th >Name</th>
                        <th >Description</th>
                        <th >Start Date</th>
                        <th >End Date</th>
                    </tr>
                    {this.state.projects.map((data,index)=>{return(
                        <tr>
                            <td>Project {index + 1}</td>
                            <td>{data.ProjectDescription}</td>
                            <td>{moment([data.ProjectStartDate]).format('LL')}</td>
                            <td>{(data.ProjectEndDate === null ? "n/a" : moment([data.ProjectEndDate]).format('LL'))}</td>
                        </tr>
                    )})}
                  
                    </tbody>
                </table> 
        </MainContainer>
    )}

}
export default Projects