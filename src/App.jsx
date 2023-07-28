import { useEffect, useState } from "react";

function App() {
  const [todos,setTodos]=useState([])
 useEffect(()=>{
  fetchData()
 },[])
 const fetchData=async()=>{
  const response =await fetch("https://jsonplaceholder.typicode.com/todos")
  const data=await response.json()
  setTodos(data)
    }
  return(
  <section>
     <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Completed</th>
      </tr>
    </thead>
 
      {
        todos.map(todo=>(
          <tbody>
            <tr>
              <td>{todo.id}</td>
              <td>{todo.title}</td>
              {
                todo.completed?(<td className="done">Done</td>):(<td className="none">None</td>)
              }
            </tr>
          </tbody>
        ))
      }

   </table>
  </section>
  )
}

export default App;
