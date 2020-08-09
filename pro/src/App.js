import React from "react";
import Home from "./Home";
import "./App.css";
import { Route, Link } from "react-router-dom";
import ToDo from "./ToDo";
import Daily from "./Daily";
import DailyTask from "./DailyTask";
import { Card } from "react-bootstrap";

function App() {
  const cardInfo = [
    //How to add link? link:"https://www.creditkarma.com/advice/i/credit-karma-guide-budgeting"
    {
      image:
        "https://s3.amazonaws.com/freestock-prod/450/freestock_573398767.jpg",
      title: "Budget",
      link: "https://www.creditkarma.com/advice/i/credit-karma-guide-budgeting",
      text: "Need help with budgeting?",
    },
    {
      image:
        "https://vignette.wikia.nocookie.net/logopedia/images/0/03/IBooks_OS_X.svg/revision/latest/scale-to-width-down/340?cb=20181228231211",
      title: "Books",
      text: "These Resources are a life saver",
    },
    {
      image:
        "https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX23586509.jpg",
      title: "Credit",
      text: "These Resources are a life saver",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTtsHbGn7OTLODsvuwEGjdbiAk8YwDMfFI43Q&usqp=CAU",
      title: "Help",
      text: "These Resources are a life saver",
    },
  ];
  const gridStack = [
    {
      image: "https://pmyf.files.wordpress.com/2020/03/resources-1-1.jpg",
      title: "Resources",
      text: "These Resources are a life saver",
    },
  ];

  //Used cards from https://react-bootstrap.github.io/components/cards/
  const renderCard = (card, index) => {
    return (
      <a href={card.link}>
        <Card style={{ width: "15rem" }} key={index} className="box">
          <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>{card.Text}</Card.Text>
          </Card.Body>
        </Card>
      </a>
    );
  };

  return (
    <>
      <Link className="navLink" to="/">
        PROductivity
      </Link>
      <Link className="navLink2" to="/Daily">
        New ToDo
      </Link>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/ToDo/:id">
        <DailyTask />
      </Route>
      <Route path="/Daily">
        <Daily />
      </Route>
      <Route path="/DailyTask">
        <DailyTask />
      </Route>
      <div className="grid">{cardInfo.map(renderCard)}</div>;
    </>
  );
}

export default App;
