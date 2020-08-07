import React from "react";
import Home from "./Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ToDo from "./ToDo";
import Daily from "./Daily";
import DailyTask from "./DailyTask";
import {Card} from "react-bootstrap";


function App() {

const cardInfo = [
    {image: "https://img.etimg.com/thumb/width-640,height-480,imgsize-405947,resizemode-1,msid-67450028/budget-faqs/why-is-it-important-for-the-government-to-have-a-budget/budget.jpg", 
    title: "Budget", text: "Need help with budgeting?"},
    {image: "https://pmyf.files.wordpress.com/2020/03/resources-1-1.jpg", title: "Resources", text: "These Resources are a life saver"},
    
  ];

//Used cards from https://react-bootstrap.github.io/components/cards/
  const renderCard = (card,index) =>{
    return(
      <Card style={{ width: '18rem' }} key ={index} className ="box">
  <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
  <Card.Body>
    <Card.Title>{card.title}</Card.Title>
    <Card.Text>
      {card.Text}
    </Card.Text>
  </Card.Body>
</Card>
    );
  }
  
  return (
    <>
      <Link className='navLink' to="/">PROductivity</Link>

     

      <Route path="/" exact>
        <Home />
      </Route>

      <Route path="/ToDo/:title">
        <ToDo />
      </Route>

      <Route path="/Daily">
        <Daily />
      </Route>

      <Route path="/DailyTask ">
        <DailyTask />
      </Route>
 
      <div className="grid">
  {cardInfo.map(renderCard)}
</div>;
    </>
    
  );
}


export default App;
