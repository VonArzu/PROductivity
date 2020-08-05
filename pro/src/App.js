import React from "react";
import Home from "./Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ToDo from "./Todo";
import Daily from "./Daily";
import DailyTask from "./DailyTask";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/">Daily</Link>
      <Link to="/">ToDo</Link>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/ToDo">
        <ToDo />
      </Route>

      <Route path="/Daily/:title">
        <Daily />
      </Route>
    </>
  );
}

export default App;
