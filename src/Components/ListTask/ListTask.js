import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import Task from '../Task/Task'
const ListTask = () => {
    const list = useSelector (state => state.listReducer.listTasks)
    // chemin!! state => state.listReducer.listTasks ??
    console.log(list);
    const [status , setStatus]=useState("All")
  return (
    <div>
      <Button variant="outline-primary" onClick = {()=>setStatus("ALL")}>All</Button>
      <Button variant="outline-primary" onClick = {() => setStatus("Done")}>Done</Button>
      <Button variant="outline-primary" onClick = {() => setStatus("unDone")}>unDone</Button>
{
status==="Done" ? list.filter((el) => el.isDone===true)
                  .map((el) => <Task task={el} key={el.id}/>)
                  : status==="unDone" ? list.filter((el) => el.isDone===false)
                  .map((el)=><Task task={el} key={el.id}/>)
:list.map (el=> <Task task={el} key={el.id}/>)}
    </div>
  )
}

export default ListTask