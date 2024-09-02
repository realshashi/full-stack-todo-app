import { useState } from "react";
export default function CreateTodo(){
    //react query
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");

  return ( <div>
        <input id="title" type="text" placeholder="enter title" onChange={(e)=>{
          const value = e.target.value;
          setTitle(value);
          
        }}></input>
        <input id="descript" type="text" placeholder="description" onChange={(e)=>{
          const value = e.target.value;
          setDescription(value);
          }}></input>
        <button onClick={()=>{
          fetch('http://localhost:3000/todo',{
            method:"POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "contentType" : "application/json"
            }
          })
          .then(async function(res){
            const json = await res.json();
            alert("todo added");
          })
        }}>addTodo</button>
         </div>)
};