import React from "react";
import "./Styles/Form.css";
import TaskItem from "./TaskItem";

const TaskLists = ({ tasks, toggleTaskComplete, deleteTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No Task to do!!</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTaskComplete={toggleTaskComplete}
              deleteTask={deleteTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskLists;
