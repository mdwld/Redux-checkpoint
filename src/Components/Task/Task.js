import React from 'react'
import {Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux';
import { deleteTask , doneTask} from '../../JS/Actions/listTask';
import EditTask from '../EditTask/EditTask';
import './Task.css';
const Task = ({task}) => {
  const dispatch =useDispatch()
  return (
    <div>
      <div className = "task-card">
        <p className={task.isDone ? "done" : null}>{task.text}</p>
        <EditTask task={task}/>
        <Button variant="outline-primary" onClick = {() => dispatch(deleteTask(task.id))}>Delete</Button>
        <Button variant="outline-primary" onClick = {() => dispatch(doneTask(task.id))}> {task.isDone ? "Done" : "unDone"} </Button>
      </div>
    </div>
  )
}

export default Task