import React, { useEffect, useState } from "react";
import axios from "axios";
import ToDo from "./ToDo";


function Home() {
  const [data, updateData] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios(
        `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201?api_key=keyoYm8SN7shEcrlP`,
        // {
        //   headers: {
        //     'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        //   },
        // }
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
          title={item.fields.title}
          list={item.fields.list}
          steps={item.fields.steps}
          date={item.fields.due_date}
        />
      ))}
    </>
  );
}

export default Home;
