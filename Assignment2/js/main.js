/**********************************************************************************
 *   WEB422 –Assignment2
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
 *  No part of this assignment has been copied manually or electronically from any other source
 *   (including web sites) or distributed to other students.*
 *  Name:Behnam Ghafouri Student ID: 117724187 Date: 2019-09-30
 **********************************************************************************/
let employeesModel = [];

initializeEmployeesModel = function(){
    $.ajax({
        url:"http://localhost:8081/employees",
        //url:"https://damp-cliffs-20846.herokuapp.com/employees",
        type:"GET",
        contentType:"application/jason"
    })
    //if successful 
    .done(function(data){
        employeesModel = data;       
        refreshEmployeeRows(employeesModel);
    })
    //if fail
    .fail(function(err){
        showGenericModal('Error','Unable to get Employees')
    })
}
    
showGenericModal = function (title,message){

        $(".modal-title").text(title);
        $(".modal-body").html(message);
        $("#genericModal").modal({
            backdrop: 'static',
            keyboard: false
        })
}
    
refreshEmployeeRows = function(employees){
    $("#employees-table").empty();
    let rowsTemplate = _.template('<% _.forEach(employees, function(employee) { %>' +
        '<div class="row body-row" data-id=<%- employee._id %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.FirstName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.LastName %></div>' +
        '<div class="col-xs-4 body-column"><%- employee.Position.PositionName %></div>' +
        '</div>'+
        '<% }); %>')
    
        let rows = rowsTemplate({'employees': employees});
        $("#employees-table").html(rows);
}
    
getFilteredEmployeesModel = function(inString){
   
    let filter = _.filter(employeesModel, function(n) {  
                                                        let status = false; 
                                                        if(    
                                                             n.FirstName.toUpperCase().includes(inString.toUpperCase()) ||
                                                             n.LastName.toUpperCase().includes(inString.toUpperCase()) ||
                                                             n.Position.PositionName.toUpperCase().includes(inString.toUpperCase())
                                                        ){status = true}
                                                         return status;
                                                        }
                        );                                     
                        
return filter;   
}
    
getEmployeeModelById = function(id){
    let retval = null;
    for(let i = 0 ; i < employeesModel.length ; i++){
        if(employeesModel[i]._id == id){
            retval = _.cloneDeep(employeesModel[i]);
        }
    }
    return retval;
}

$(function(){

    initializeEmployeesModel();
    $("#employee-search").on("keyup",function(){
        var tempString = $("#employee-search").val().toString();
        let tempEmployees = getFilteredEmployeesModel(tempString);
        refreshEmployeeRows(tempEmployees);
    });

    $(".bootstrap-header-table").on("click",".body-row",function(data){
        var empId = $(this).attr("data-id");
        var empidpure = empId.substring(0, empId.length - 5);
        let clickedEmpoyee = getEmployeeModelById(empidpure);
        var hiredate = moment(clickedEmpoyee.Hiredate).format('LL');
        clickedEmpoyee.HireDate = hiredate;

        let modalTemplate = _.template(
        '<strong>Address:</strong> <%- employee.AddressStreet %> <%- employee.AddressCity %> <%- employee.AddressState %> <%- employee.AddressZip %><br>' +
        '<strong>Phone Number:</strong> <%-employee.PhoneNum %><br>' + 
        '<strong>Hire Date:</strong> <%- employee.HireDate %>');

        showGenericModal(
            clickedEmpoyee.FirstName + " " + clickedEmpoyee.LastName, 
            modalTemplate({ 'employee':clickedEmpoyee })
        );
    })    
    
 
});


