import React from 'react'
import MainContainer from "./MainContainer"
import moment from 'moment'
class Employees extends React.Component{
    constructor(props){
        super(props)
        this.state = {employees:[]}
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        fetch("https://web422database.herokuapp.com/employees")
        .then(res => res.json())
        .then(returnedData => {
            returnedData.sort((a,b)=>{
                let A = parseInt(a.Extension)
                let B = parseInt(b.Extension)
                return (A-B)
            })
            this.setState({employees: returnedData})})
    }

    render(){return(
        <MainContainer sidebar="Employees">
            <h1 className="page-header">Employees</h1>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th >Name & Position</th>
                        <th >Address</th>
                        <th >Phone Num</th>
                        <th >Hire Date</th>
                        <th >Salary Bonus</th>
                    </tr>
                  {this.state.employees.map((data,index)=>{return(
                      <tr>
                          <td>{data.FirstName +" "+data.LastName+" - "+data.Position.PositionName }</td>
                          <td>{data.AddressStreet+" "+data.AddressCity+". "+data.AddressState+", "+data.AddressZip}</td>
                          <td>{data.PhoneNum+" ex: "+data.Extension}</td>
                          <td>{moment(data.HireDate).format('LL')}</td>
                          <td>{"$ " +data.SalaryBonus}</td>
                      </tr>
                  )})}          
                </tbody>
            </table> 
        </MainContainer>
    )}
}
export default Employees;