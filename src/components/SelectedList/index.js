import React from "react";
import "./style.css";

const SelectedList = (props) => {
  return (
    <li className="list-group-item">{props.value}</li>
  )
}

export default SelectedList