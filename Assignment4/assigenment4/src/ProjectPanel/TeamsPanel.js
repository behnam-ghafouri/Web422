import React from 'react';
import {Link} from 'react-router-dom';
class TeamsPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            teams: []
        }
        this.componentDidMount = this.componenetDidMount.bind(this);
    }

    componenetDidMount(){
        fetch("https://web422database.herokuapp.com/teams")
        .then(res => res.json())
        .then(returnedData => {this.setState({teams: returnedData});})
        .catch(err => { console.log(err);})
    }

    render(){return(
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Teams</h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                    <tbody>
                        {this.state.teams.map((data,index)=>{
                            return(
                                <tr key = {index}>
                                    <td>{data.TeamName}</td>
                                    <td>{data.Employees.length} Employees</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
                <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
              </div>
            </div>        
    )}

}
export default TeamsPanel;