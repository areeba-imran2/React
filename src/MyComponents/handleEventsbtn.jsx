export function HandleFormSubmit(event){
    const formData={
     name:event.target.name.value,
     email:event.target.email.value,
    };
 
    console.log("Form Submitted!" ,FormData);
    alert(`form Submitted! Name: ${formData.name} , Email: ${formData.email}`);
 
 }