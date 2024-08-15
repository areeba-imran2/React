import React from "react";

const employees=[
    {id:1,position:"Software Engineer",salary:95000},
    {id:2,position:"Designer",salary:850000},
    {id:3,position:"Project Manager",salary:120000},
]

export function EmployeeList(){
   return(
    <div>
        {employees.map((employee)=>(
          <div key={employee.id}>
            <h2> Employee position: {employee.position}</h2> 
            <p>Employe Salary: {employee.salary}</p>
           </div>
        ))}
    </div>
   );
}

export default EmployeeList;