import React from "react";

function Task({ text, category , onClick}) {
  function handleClick(task){
    onClick(task)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={()=>handleClick(text)} className="delete">X</button>
    </div>
  );
}

export default Task;
