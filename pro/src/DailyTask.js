import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";


function DailyTask() {
  const [data, updateData] = useState({});
  const params = useParams();
  const history = useHistory();

  useEffect(() => {
    const apiCall = async () => {
      const res = await axios.get(
        `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201/${params.id}`,

        {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          },
        }
      );
      updateData(res.data.fields);
      console.log(res.data.fields);
    };
    apiCall();
  }, []);
  const handleDelete = async (e) => {
    e.preventDefault();
    const res = await axios.delete(
      `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201/${params.id}`,

      {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      }
    );
      history.push('/');
  };

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.created_at}</p>
      <p>{data.list}</p>
      <p>{data.steps}</p>

      <button onClick={handleDelete}>Delete</button>
    </>
  );
}

export default DailyTask;
