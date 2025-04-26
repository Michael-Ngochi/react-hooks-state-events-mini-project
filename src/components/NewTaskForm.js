import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: text,
      category: category,
    };
    onTaskFormSubmit(newTask);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input 
          onChange={(e) => setText(e.target.value)} 
          type="text" 
          name="text" 
          value={text}
        />
      </label>
      <label>
        Category
        <select required
        
          name="category" 
          onChange={(e) => setCategory(e.target.value)} 
          value={category}
        >
          {categories.map((cat, index) =>
            cat !== "All" ? (
              <option key={index} value={cat}>
                {cat}
              </option>
            ) : null
          )}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
