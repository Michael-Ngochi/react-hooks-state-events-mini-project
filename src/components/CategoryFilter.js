import React, { useState } from "react";

function CategoryFilter({categories,onClick}) {
const[selected,setSelected]=useState(null)


function handleclick(cat,index){
  onClick(cat);
  setSelected(cat)
}
function isSelected(cat){
  return cat === selected ? "selected" : "";
}


  return (
    <div className="categories">
      <h5>Category filters</h5>
        {categories.map((category,index)=>{
          return <button className={isSelected(category)} key={index} onClick={()=>handleclick(category,index)}>{category}</button>
        })}
    </div>
  );
}

export default CategoryFilter;
