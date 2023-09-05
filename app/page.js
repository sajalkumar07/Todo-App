"use client"
import { list } from "postcss";
import React, { useState } from "react";

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
          <li key={i} className="flex items-center justify-between">
            <div id="section" className="">
              <h5 className="text-2xl font-semibold">{t.title}</h5>
              <h5 className="text-xl font-semibold">{t.desc}</h5>
              <button 
              onClick={()=>
                deleteHandler(i) 
              }  
              className=' bg-red-400 text text-white py-2 px-4 font:bold rounded'>
              Delete
              </button>
            </div>
          </li>
        )
      })
  return (
    <>
    <h1 id="title" className=' text-white p-5 text-5xl  
    font=bold text-center'>My Todo App</h1>

      <form onSubmit={onSubmitHandler}>
        <input id="textInput" type="text" className='text-2xl border-zinc-800 
        m-10 border-2 py-4 px-2 font-bold corner' placeholder='enter task here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}>
        </input>
      
        <input id="textInput" type="text" className='text-2xl border-zinc-800 
        m-10 border-2 py-4 px-2 font-bold' placeholder='enter discription here'
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}>
        </input> 

        <button className='bg-black text text-white py-4 px-4
        font:bold rounded text-2xl'>
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