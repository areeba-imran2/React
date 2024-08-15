import React, { useState } from 'react';

export function ColorForm() {
  const [color, setColor] = useState('red');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Your favorite color is: ${color}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Pick your favorite color:
        <select value={color} onChange={handleChange}>
          <option value="red">red</option>
          <option value="black">black</option>
          <option value="yellow">yellow</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ColorForm;