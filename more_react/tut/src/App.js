import "./App.css";
import { useState } from 'react';


function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] =useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  const addTask = () => {
    const newToDoList = [...todoList, newTask];
    setTodoList(newToDoList);
  };

  const deleteTask = (taskName) => {
    const newToDoList = todoList.filter((task) => {
      if (task === taskName){
        return false;
      }else {
        return true;
      }
    });
    setTodoList(newToDoList);
  };

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return(
          <div>
            <h1>{task}</h1>
            <button onClick={ () => deleteTask(task)}>Delete</button>
          </div>)
        })}
      </div>
    </div>
  );
}

export default App;