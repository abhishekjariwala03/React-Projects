import React from "react";
import { useState } from "react";
import "./Styles/Form.css";

const Form = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskText.trim() !== "" && taskText != null) {
      addTask(taskText);
      setTaskText("");
    }
  };

  return (
    <>
      <div className="formDiv">
        <h2>Add Your Task</h2>
        <form onSubmit={handleSubmit}>
          <input
            style={{
              background: "white",
              color: "black",
              borderRadius: "10px",
            }}
            type="text"
            name="task"
            id="task"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Enter Your Task"
          />
        </form>
      </div>
    </>
  );
};

export default Form;
