import Task from "./Task";
function TaskList({tasks,onRemove}) {

  return (
    <div className="tasks">
      {tasks.map((task,index)=>{
        return(
         <Task key={index} text={task.text} category={task.category} onClick={onRemove}/>
        )
      })}
    </div>
  );
}

export default TaskList;
