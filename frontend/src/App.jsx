import { useState } from "react";
import './App.css'
import CreateTodo from './components/CreateTodo'
import  Todos  from "./components/Todo";


function App() {
const [todos,setTodos] = useState([]);

useEffect(() => {
  setInterval(() => {
    fetch('http://localhost:3000/todos')
.then(async function(res){
  const json = await res.json();
  setTodos(json.todos);
})
  }, 10000);
}, [])



  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos> 
    </div>
  )
}

export default App
