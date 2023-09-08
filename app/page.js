"use client"
import { list } from "postcss";
import React, { useState } from "react";
import "./globals.css"; // Import your CSS file for styling

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const [deleteTask, setdeleteTask] = useState([])
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask);
  };

  const deleteHandler = (i)=>{
    let copytask = [...mainTask]
    copytask.splice(i,1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0)
      renderTask = mainTask.map((t,i)=>{
        return ( 
          <li key={i} id="textList" className="">
            <div id="section" className="">
              <h5 className="">{t.title}</h5>
              <button id="deleteButton"
              onClick={()=>
                deleteHandler(i) 
              }  
              className=''>
              Delete
              </button>
            </div>
          </li>
        )
      })
  return (
    <>
    <h1 id="title" className=''>Task Box</h1>

      <form onSubmit={onSubmitHandler}>
        <input id="textInput" type="text" className='' placeholder='enter task here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}>
        </input>

        <button id="addTaskBtn" className=''>
            Add Task
        </button>
      </form>

        <hr></hr>
        <div className="p-8 bg-slate-200 text-black">
          {renderTask}
        </div>
    </>
  )
}

export default page