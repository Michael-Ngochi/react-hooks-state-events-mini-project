import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const[alltasks,setTasks]=useState(TASKS)
const[showtasks,setShowTasks]=useState(alltasks)


function handleRemove(taskText){
  console.log("removing: "+taskText);
  setTasks((prevTasks) => {
    const updatedTasks = prevTasks.filter((task) => task.text !== taskText);
    setShowTasks(updatedTasks); // update visible tasks too
    return updatedTasks;
  });}

function handleAdd(newTask){
  setTasks((prevTasks) => {
    const updatedTasks = [...prevTasks, newTask];
    setShowTasks(updatedTasks);
    return updatedTasks;
  });
  console.log(newTask);
}

function handleChange(currentCategory) {
  console.log(currentCategory);

  if (currentCategory === "All") {
    setShowTasks(alltasks);
  } else {
    setShowTasks(alltasks.filter((task) => task.category === currentCategory));
  }
}


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} onClick={handleChange}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleAdd}/>
      <TaskList tasks={showtasks} onRemove={handleRemove}/>
    </div>
  );
}

export default App;
