import React from "react";
import "./style.css";

const SelectedList = (props) => {
  return (
    <li onDoubleClick={() => props.removeBehavior(props.id)} className="list-group-item">{props.value}</li>
  )
}

export default SelectedList