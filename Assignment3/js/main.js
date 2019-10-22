var viewModel = {
    teams: ko.observable([]),
    employees: ko.observable([]),
    projects: ko.observable([])
};

showGenericModal = function (title,message){

    $(".modal-title").text(title);
    $(".modal-body").html(message);
    $("#genericModal").modal({
        backdrop: 'static',
        keyboard: false
    })
}

var initializeTeams = function (){
    
         var promise = new  Promise((resolve, reject)=>{

                $.ajax({
                    url:'https://web422database.herokuapp.com/teams-raw',
                    type:'GET',
                    contentType:'application/json'
                })
                .done((data) => {
                    data.sort((a,b)=>{
                        let teamA = parseInt(((a.TeamName).substr(4,a.length)));
                        let teamB = parseInt(((b.TeamName).substr(4,b.length)));
                        return teamA - teamB;
                    })

                    viewModel.teams = ko.mapping.fromJS(data);
                    resolve();
                })
                .fail((err)=>{
                    reject("Error loading the team data.");    
                })
            }

        )
        return promise;
}

var initializeEmployees = function(){
    return(
       new Promise((resolve, reject)=>{
        
        $.ajax({
            url:'https://web422database.herokuapp.com/employees',
            type:'GET',
            contentType:'application/json'
        })
        .done((data) => {
            viewModel.employees = ko.mapping.fromJS(data);
            resolve();
        })
        .fail((err)=>{
            reject("Error loading the employee data.");    
        })
    }
    ))
}

var initializeProjects = function(){
    return(
        new Promise((resolve, reject)=>{
        
        $.ajax({
            url:'https://web422database.herokuapp.com/projects',
            type:'GET',
            contentType:'application/json'
        })
        .done((data) => {
            viewModel.projects = ko.mapping.fromJS(data);
            resolve();
        })
        .fail((err)=>{
            reject("Error loading the project data.");    
        })
    }
    ))
}

$(function(){
   
        

         initializeTeams()
        .then(initializeEmployees)
        .then(initializeProjects)
        .then(()=>{
                        
        ko.applyBindings(viewModel);
        $("select.multiple").multipleSelect({ filter: true });
        $("select.single").multipleSelect({ single: true, filter: true });
        })
        .catch((err)=>{
            showGenericModal("Error", err);}) 
        
    
   
    



});


function saveTeam() {

    let currentTeam = this;

    $.ajax({
        url: "https://web422database.herokuapp.com/team/" + currentTeam._id(),
        type: "PUT",
        data: JSON.stringify({
            Projects: currentTeam.Projects(),
            Employees: currentTeam.Employees(),
            TeamLead: currentTeam.TeamLead()
        }),
        contentType: "application/json"
    })
        .done(function (data) {
            showGenericModal("Success!", currentTeam.TeamName() + " Updated Successfully"
            );
        })
        .fail(function (err) {
            showGenericModal("Error", "Error updating the team information.");
        });
}


