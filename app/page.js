"use client"
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const onSubmitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
    console.log(mainTask)
  }

  let renderTask = <h2>No Task Available</h2>
  if(mainTask.length>0)
      renderTask = mainTask.map((t,i)=>{
        return ( 
          <div className="flex justify-between mb-5 ">
            <h5 className="text-xl font-semibold">{t.title}</h5>
            <h5 className="text-xl font-semibold">{t.desc}</h5>
          </div>
        )
      })
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl 
    font=bold text-center'>My Todo App</h1>

      <form onSubmit={onSubmitHandler}>
        <input type="text" className='text-2xl border-zinc-800 
        m-10 border-2 py-4 px-2 font-bold corner' placeholder='enter text here'
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}>
        </input>
      
        <input type="text" className='text-2xl border-zinc-800 
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