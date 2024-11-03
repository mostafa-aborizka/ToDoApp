import { useState } from "react"

function App() {
  const [tasks, setTasks]=useState([]);
  const [newTask, setNewTask]=useState("");

  function handleInputChange(event){
    const task=event.target.value;
    setNewTask(task);
  }
  function addTask(){
    if(newTask.trim()!==""){
      setTasks(t=>[...t,newTask]);
      setNewTask("");
    }
  }
  function deleteTask(index){
    const updatedTasks=tasks.filter((_,i) => i !== index);
    setTasks(updatedTasks);
  }
  function moveUp(index){
    if(index>0){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }
  function moveDown(index){
    if(index<tasks.length - 1){
      const updatedTasks=[...tasks];
      [updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
      setTasks(updatedTasks);
    }

  }
  

  return (
    <>
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input 
        type="text"
        placeholder="Enter a task..." 
        value={newTask}
        onChange={handleInputChange}/>

        <button className="add-button"
                onClick={addTask}>
          Add
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task,index)=>
          <li key={index} >
            <input type="checkbox" />
            <span id={index} className="text" >{task}</span>
            <button className="delete-button"
            onClick={()=>deleteTask(index)}>Delete</button>
            <button className="move-button"
            onClick={()=>moveUp(index)}>🢁</button>
            <button className="move-button"
            onClick={()=>moveDown(index)}>🢃</button>
          </li>
          )}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
