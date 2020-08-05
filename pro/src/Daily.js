import React from "react";
import axios from "axios";

function Daily() {
  const [title, updateTitle] = useSate({});
  const [date, updateDate] = useSate({});
  const [list, updateList] = useSate({});
  const [steps, updateSteps] = useSate({});

  const addDaily = async (title, date, list, steps) => {
    const data = await axios.post(
      `https://api.airtable.com/v0/app2aFIfy94WFful9/Table%201`,
      {
        fields: {
          created_at: date,
          title: title,
          list: list,
          steps: steps,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY} `,
          "Content=Type": "application/json",
        },
      }
    );
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addDaily(title, date, list, steps);
        }}
      >
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          onChange={(e) => {
            updateTitle(e.target.value);
          }}
        />

        <label htmlFor="createdby">Create Date</label>
        <input
          type="text"
          id="createdby"
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
