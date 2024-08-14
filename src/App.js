import "./App.css";
import { useState } from "react";
import React from "react";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import MyComponent1 from "./components/MyComponent1";
import { HandleFormSubmit } from "./MyComponents/handleEventsbtn";
import { HandleClick } from "./MyComponents/handleClick";
import { handleMouseOver } from "./MyComponents/handleMouseOver";
import { handleKeyPress } from "./MyComponents/handleKeyPress";
import {Greeting} from "./MyComponents/Greeting";
import {teranaryOperators} from "./MyComponents/ternary0perators";
import {WarningBanner} from "./MyComponents/WarningBanner";
function App() {
  // const handleChange=(e)=>{
  //   setName(e.target.value)
  // }
  const [showWarning, setShowWarning] = React.useState(true);

  return (
    <>
      <br />
      <br />
      <div className="button-container">
        <button onClick={HandleClick}>Click Me!</button>
      </div>
      <br />
      <br />
      {/* <div>
        <p onMouseOver={handleMouseOver}>Hover over this text</p>
      </div> */}

      <div>
        <input
          type="text"
          onKeyDown={handleKeyPress}
          placeholder="Press any key..."
        />
      </div>

      <div className="form-container">
        <h1>Contact Form</h1>
        <form action="/submit" onSubit={HandleFormSubmit}>
          <div classNmae="form-group">
            <label>Name: </label>
            <input type="text" id="name" name="name"></input>
          </div>
          <br />
          <div classNmae="form-group">
            <label>Email: </label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div>
        <Greeting isLoggedIn={true} />
      </div>
      <br/>
      <div>
      <teranaryOperators isSignIn={false} />
    </div>

    <div>
      {showWarning && <WarningBanner warn={showWarning} />}
      <button onClick={() => setShowWarning(!showWarning)}>
        {showWarning ? 'Hide' : 'Show'} Warning
      </button>
    </div>

    </>
  );
}

export default App;
