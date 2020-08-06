import React from "react";
import { Link } from "react-router-dom";

function ToDo(props) {
  return (
    <>
      <Link to={`/Daily/${props.id}`}>
        <h2>{props.title}</h2>
      </Link>
      {/* <li className="todo stack-small">
        <div className="c-cb">
          <input id="todo-0" type="checkbox" defaultChecked={true} />
          <label className="todo-label" htmlFor="todo-0">
            Eat
          </label>
        </div>
        <div className="btn-group">
          <button type="button" className="btn">
            Edit <span className="visually-hidden">Eat</span>
          </button>
          <button type="button" className="btn btn__danger">
            Delete <span className="visually-hidden">Eat</span>
          </button>
        </div>
      </li> */}

      {/* MDN source https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_components */}
    </>
  );
}

export default ToDo;
