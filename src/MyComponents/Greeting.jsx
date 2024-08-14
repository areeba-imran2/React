//Conditional rendering in React allows you to render different UI elements or components based on certain conditions.
import React from "react";

export function Greeting({ isLoggedIn }) {  // Correct destructuring
  if (isLoggedIn) {  // Use the correct prop name
    return <h1>Welcome back!</h1>;
  } else {
    return <h1>Please sign in.</h1>;
  }
}
