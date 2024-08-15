import React,{useState} from 'react';

export function NameForm(){
    const [name,setName]=useState('');
    
    const handleChange=(event)=>{
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}` );
      };
    
      return (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
      );
}
    
    export default NameForm;

    

