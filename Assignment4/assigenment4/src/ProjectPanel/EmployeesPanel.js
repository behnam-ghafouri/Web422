import React from 'react';
import {Link} from 'react-router-dom';
class EmployeesPanel extends React.Component{
    constructor(props){
        super(props)
        this.state = { employees: [] }
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetch("https://web422database.herokuapp.com/employees")
        .then(res => res.json())
        .then(returnedData=>{this.setState({employees: returnedData})})
        .catch(err => {console.log(err)});
    }

    render(){return(        
             <div className="panel panel-default">
               <div className="panel-heading">
                 <h3 className="panel-title">Employees</h3>
               </div>
               <div className="panel-body">
                 <div className="table-responsive overview-table">
                   <table className="table table-striped table-bordered">
                     <tbody>
                        {this.state.employees.map((data,index)=>{return(
                            <tr key = {data._id}>
                                <td>{data.FirstName + " " +data.LastName}</td>
                                <td>{data.Position.PositionName}</td>
                            </tr>
                        )})}
                    </tbody>
                   </table>
                 </div>
                 <Link to="/employees" className="btn btn-primary form-control">View All Employee Data</Link>
               </div>
             </div>
           
         
    )}

}
export default EmployeesPanel;