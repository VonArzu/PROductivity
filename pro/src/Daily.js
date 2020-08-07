import React, { useState } from "react";
import axios from "axios";

function Daily() {
  const [title, updateTitle] = useState('');
  const [date, updateDate] = useState('');
  const [list, updateList] = useState('');
  const [steps, updateSteps] = useState('');

  const addDaily = async () => {
    const data = await axios.post(
      `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201`,
      {
        fields: {
          due_date: date,
          title: title,
          list: list,
          steps: steps,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY} `,
          "Content-Type": "application/json",
        },
      }
    );
  };
  return (
    <>
      <form className="form"
        onSubmit={(e) => {
          e.preventDefault();
          addDaily(date, steps);
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            updateTitle(e.target.value);
          }}
        />

        <label htmlFor="createdby">Create Date</label>
        <input
          type="date"
          id="createdby"
          value={date}

          onChange={(e) => {
            updateDate(e.target.value);
          }}
        />

        <label htmlFor="list">List</label>
        <input
          type="text"
          id="list"
          onChange={(e) => {
            updateList(e.target.value);
          }}
        />

        <label htmlFor="steps">Steps</label>
        <textarea
          id="steps"
          cols="30"
          rows="10"
          value={steps}
          onChange={(e) => {
            updateSteps(e.target.value);
          }}
        ></textarea>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
export default Daily;
