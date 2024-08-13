// import React from "react";
// import PropTypes from "prop-types";

export default function TextForm(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="myText" className="form-label">
          Example textarea
        </label>
        <textarea className="form-control" id="myText" rows="7"
        ></textarea>
      </div>
    </div>
  );
}
