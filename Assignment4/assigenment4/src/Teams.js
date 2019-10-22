import React from 'react'
import MainContainer from './MainContainer'

class Teams extends React.Component{
    constructor(props){
        super(props)
        this.state = { teams: []}
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetch("https://web422database.herokuapp.com/teams")
        .then(res => res.json())
        .then(returnedData => {
            returnedData.sort(function(a,b){
                let A = parseInt(((a.TeamName).substr(4,a.length)))
                let B = parseInt(((b.TeamName).substr(4,a.length)))
                return (A - B);
            })
            this.setState({teams: returnedData})
            })
        .catch(err => {console.log(err)})
    }

    render(){return(
        <MainContainer sidebar="Teams">
            <h1 className="page-header">Teams</h1>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th >Name</th>
                        <th >Description</th>
                        <th >Employees</th>
                        <th >TeamLead</th>
                    </tr>
                    {this.state.teams.map((data,index)=>{return(
                        <tr>
                            <td>{data.TeamName}</td>
                            <td> 
                                <ul>{data.Projects.map((data,index)=>{return(
                                <li>{data.ProjectName}</li>        
                                )})}</ul></td>
                            <td>{data.Employees.length} Employees</td>
                            <td>{data.TeamLead.FirstName + " " +data.TeamLead.LastName}</td>
                        </tr>
                    )})}
                </tbody>
            </table> 
        </MainContainer>
    )}
}
export default Teams;