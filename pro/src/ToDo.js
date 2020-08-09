import React from "react";
import { Link } from "react-router-dom";



function ToDo(props) {
 
  return (
    <>
      <Link to={`/ToDo/${props.id}`}>
        <h2 className="add">{props.title}</h2>
      </Link>
      
    </>
  );
}

export default ToDo;
