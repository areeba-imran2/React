import React, { useState } from "react";

export function CheckboxForm() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Checkbox is ${isChecked ? "checked" : "unchecked"}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Accept Terms:
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default CheckboxForm;
