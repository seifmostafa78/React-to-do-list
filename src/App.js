import { useRef, useState } from 'react';
import './App.css';

function App() {
  
  const [todos, settodos] = useState([])
  const inputref = useRef()

  const handleClick = () => {
    const text = inputref.current.value
    settodos([...todos, {completed: false, text}])
    inputref.current.value = "";
  }

  const handlecompleteditem = (index) =>{
    let newtodos = [...todos]
    newtodos[index].completed = !newtodos[index].completed
    settodos(newtodos)
    console.log(todos)
  }

  const handledeleteditem = (index) =>{
    let newtodos = [...todos]
    newtodos.splice(index, 1)
    settodos(newtodos)
  }

  return (
    <div className="App">
      <div className='container'>
        <h2>To Do List</h2>
        <ul>
          {todos.map(({completed, text}, index) => {
            return (
            <div className='items'>
                <li key={index} className={completed? "done" : ""} onClick={() => handlecompleteditem(index)}>{text}</li>
                <span onClick={() => handledeleteditem(index)} className='trash'>❌</span>
            </div>
          );
          })}
        </ul>
        <input ref={inputref} placeholder='type...' />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}

export default App;
