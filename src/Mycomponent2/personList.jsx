import React from "react";

const persons=[
    {id:1,name:"Ali",department:"SE"},
    {id:2,name:"Anum",department:"IT"},
    {id:3,name:"Hassan",department:"AI"},
    {id:4,name:"Eman",department:"CS"}
]

export function PersonList(){
    return(
     <div>
        {persons.map((person) => (
        <div key={person.id}>
            <h3>{person.name}</h3>
            <p>Department:{person.department}</p>
        </div>
        ))}
     </div>
    );
}export default PersonList;
