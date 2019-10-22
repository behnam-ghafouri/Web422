/**********************************************************************************
 *   WEB422 –Assignment1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
 *  No part of this assignment has been copied manually or electronically from any other source
 *   (including web sites) or distributed to other students.*
 *  Name:Behnam Ghafouri Student ID: 117724187 Date: 2019-09-12
 **********************************************************************************/


$(function(){
    
    $("#teams-menu").on("click",function(event){
        event.preventDefault();
      
        //making ajax request for event of click on the teams-menue
        $.ajax({
            url:"http://localhost:8081/teams",
            //url:"https://damp-cliffs-20846.herokuapp.com/teams",
            type:"GET",
            contentType:"application/jason"
        })
        //if successful 
        .done(function(data){
            $("#data").empty().append("<h3>Teams</h3>").append(JSON.stringify(data));
        })
        //if fail
        .fail(function(){
            $("#data").empty().append("<h3>Teams</h3>").append(JSON.stringify(err));
        })
    })

    $("#employees-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url:"http://localhost:8081/employees",
            //url:"https://damp-cliffs-20846.herokuapp.com/employees",
            type:"GET",
            contentType:"application/json"
        })

        .done(function(data){
            $("#data").empty().append("<h3>Employees</h3>").append(JSON.stringify(data));
        })
        
        .fail(function(err){
            $("#data").empty().append("<h3>Employees</h3>").append(JSON.stringify(err));
        })
    })

    $("#projects-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
           url:"http://localhost:8081/projects",
            //url:"https://damp-cliffs-20846.herokuapp.com/projects",
            type:"GET",
            contentType:"application/json"
        })
        
        .done(function(data){
            $("#data").empty().append("<h3>Projects</h3>").append(JSON.stringify(data));
        })

        .fail(function(err){    
            $("#data").empty().append("<h3>Projects</h3>").append(JSON.stringify(err));
        })
    })

    $("#positions-menu").on("click",function(event){
        event.preventDefault();

        $.ajax({
            url:"http://localhost:8081/positions",
           // url:"https://damp-cliffs-20846.herokuapp.com/positions",
            type:"GET",
            contentType:"application/json"
        })

        .done(function(data){
            $("#data").empty().append("<h3>Positions</h3>").append(JSON.stringify(data));
        })

        .fail(function(err){
            $("#data").empty().append("<h3>Positions</h3>").append(JSON.stringify(err));
        })
    })
})