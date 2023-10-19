import React, { useState } from "react";
import "./Styles/Form.css";
import Form from "./Form";
import TaskLists from "./TaskLists";

const Home = () => {
  const [tasks, setTasks] = useState("");

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      text: taskText,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTaskComplete = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>Task Manager</h1>
      <Form addTask={addTask} />
      <TaskLists
        tasks={tasks}
        toggleTaskComplete={toggleTaskComplete}
        deleteTask={deleteTask}
      />
    </>
  );
};

export default Home;
