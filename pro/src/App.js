import React from "react";
import Home from "./Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ToDo from "./ToDo";
import Daily from "./Daily";
import DailyTask from "./DailyTask";

function App() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/">ToDo</Link>
      <Link to="/">Daily</Link>
      <Link to="/">DailyTask</Link>

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/ToDo">
        <ToDo />
      </Route>

      <Route path="/Daily/:title">
        <Daily />
      </Route>

      <Route path="/DailyTask">
        <DailyTask />
      </Route>
    </>
  );
}

export default App;
