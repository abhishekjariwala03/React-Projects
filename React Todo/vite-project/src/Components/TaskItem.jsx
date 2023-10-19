/* TaskItem.jsx */
import React from "react";

const TaskItem = ({ task, toggleTaskComplete, deleteTask }) => {
  const taskStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  return (
    <div style={taskStyle}>
      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>{" "}
      <button
        style={{ marginRight: "10px" }}
        onClick={() => toggleTaskComplete(task.id)}
      >
        {task.completed ? "Not Done 👎" : "Done 👍"}
      </button>
      <button
        onClick={() => deleteTask(task.id)}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "1.2em",
          cursor: "pointer",
        }}
      >
        ❌
      </button>
    </div>
  );
};

export default TaskItem;
