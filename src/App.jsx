import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Checkbox from '@mui/material/Checkbox';


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
          <AddIcon />
        </button>
      </div>
      <div>
        <ul>
          {tasks.map((task,index)=>
          <li key={index} >
            <Checkbox  color="success" />
            <span id={index} className="text" >{task}</span>
            <button className="delete-button"
            onClick={()=>deleteTask(index)}><DeleteIcon /></button>
            <button className="move-button"
            onClick={()=>moveUp(index)}><ArrowCircleUpIcon /></button>
            <button className="move-button"
            onClick={()=>moveDown(index)}><ArrowCircleDownIcon /></button>
          </li>
          )}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
