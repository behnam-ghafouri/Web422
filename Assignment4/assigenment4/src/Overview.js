import React, { Component } from 'react';
import MainContainer from './MainContainer'
import EmployeesPanel from './ProjectPanel/EmployeesPanel'
import ProjectPanel from './ProjectPanel/ProjectPanel'
import TeamsPanel from './ProjectPanel/TeamsPanel'

class Overview extends React.Component{
    render(){return(
        <MainContainer sidebar="Overview">
            <h1 className="page-header">Overview</h1>
            <div >
                <div className="col-md-4">
                <ProjectPanel />
                </div>
                <div className="col-md-4">
                <TeamsPanel />
                </div>
                <div className="col-md-4">
                <EmployeesPanel />
                </div>
            </div>
         </MainContainer>        
    )}
}
export default Overview;