import React from 'react';
import { useEffect, useState } from 'react';
import Task from './Task'; // Importing the Task component

// Main component
const Main = () => {
  // Retrieving initial tasks from localStorage or initializing an empty array
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];
  // State variables for tasks, title, and description
  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Function to handle form submission and add new task
  const submitHandler = (e) => {
    e.preventDefault();
    // Adding new task to the task array
    setTask([...task, { title, description }]);
    // Saving updated tasks to localStorage
    localStorage.setItem("task", JSON.stringify(task));
    // Clearing title and description fields after submission
    setTitle("");
    setDescription("");
  };

  // Function to delete a task
  const deleteTask = (index) => {
    // Filtering out the task with the specified index
    const filteredArr = task.filter((val, i) => {
      return i !== index;
    });
    setTask(filteredArr);
  };

  // useEffect hook to update localStorage when tasks state changes
  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  // JSX
  return (
    <>
      <div className="container">
        <h2 className='h-effect'>ToDo List</h2>
        <p>What do you want to accomplish today?</p>
        {/* Form for adding new task */}
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder='Enter a new task'
            className='input-box'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <button className='btn'>ADD</button>
        </form>

        {/* Mapping over tasks to display Task components */}
        {task.map((item, index) => (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default Main;
