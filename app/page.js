"use client"
import React, { useState } from 'react'

function Home() {

  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }]);
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
  }

  let renderTask = <h2>No Task Available</h2>;

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <>
          <li key={i} className='flex items-center justify-between'>
            <div className="flex items-center justify-between mb-5 w-2/3">
              <h5 className='text-2xl font-sembold' >{t.title}</h5>
              <h6 className='text-2xl font-sembold'>{t.desc}</h6>
            </div>
            <button onClick={()=> {
              deleteHandler(i)
            }}
              className='bg-red-600 text-white px-4 py-2 rounded-xl font-bold'>Delete</button>
          </li>
        </>)
    })
  }

  return (
    <>
      <h1 className='text-5xl font-bold text-center bg-black text-white p-5'>Rahul's Todo List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className='text px-4 py-2 m-8 border-zinc-800 border-4' placeholder='Enter Title here' value={title}
          onChange={(e) => {
            settitle(e.target.value)
          }} />
        <input type="text" className='text px-4 py-2 m-8 border-zinc-800 border-4' placeholder='Enter Description here' value={desc}
          onChange={(e) => {
            setdesc(e.target.value)
          }}
        />
        <button className='bg-black text-white px-4 py-3 rounded-xl font-bold'>Add Task</button>
      </form>
      <hr />
      <div className='p-8 bg-pink-200 mx-5 border-zinc-900'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default Home
