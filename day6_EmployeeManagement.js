let employees=[];  // array declaration

function addEmp(id,name,salary = true){
    employees.push({id,name,salary});   // inside the creating object by using {}
    console.log("Employee added",employees);
}
addEmp(1,"Kaviya Sri",100000);
addEmp(2,"Geetha",150000);
addEmp(3,"Rajesh Kannan",200000);

//update assign

function updateEmp(id,newDetail){
    const emp=employees.find(e => e.id === id)
    if(emp){
        Object.assign(emp,newDetail);
        console.log("Updated",employees)
    }
    else{
        console.log("Employee not found")
    }
}
updateEmp(3,{name:"Raju"});

// delete  index

function removeEmp(id){
    const index = employees.findIndex((e)=>e.id===id);
    if(index != -1){
        employees.splice(index,id)
        console.log("employee removed",employees)
    }
    else{
        console.log("Employee not found");
    }
}
removeEmp(1)

// add salary

function totalSalary(){
    const total=employees.reduce((sum,emp)=>sum+emp.salary,0);
    console.log("Total salary is",total);
}
totalSalary()