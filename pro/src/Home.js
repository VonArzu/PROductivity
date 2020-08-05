import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDo from "./ToDo";
import { Route, Link } from "react-router-dom";

function Home() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(
        `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateData(res.data.records);
    };
    apiCall();
  }, []);

  return (
    <>
      {data.map((item) => (
        <ToDo
          id={item.id}
          title={item.feilds.title}
          date={item.feilds.created_at}
          list={item.feilds.text}
          steps={item.feilds.steps}
        />
      ))}
    </>
  );
}

export default Home;
