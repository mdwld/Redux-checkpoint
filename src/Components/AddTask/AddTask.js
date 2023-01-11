import React from 'react'
import { useState } from 'react';
import {Form , Modal , Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../../JS/Actions/listTask';
const AddTask = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [text , setText] = useState("");
  const handleAdd = (e) => {
    e.preventDefault()
    if(text) {
      dispatch(addTask({id : Math.random() , text , isDone : false}))
      handleClose()
    }
    else {
      alert("canot add empty task")
    }
  }
  return (
    <div>
      <Form  onSubmit={handleAdd}>
      <Form.Control type="string" placeholder="Enter new task" onChange = {(e)=>setText(e.target.value)} value={text}/>
      
 <Button variant="primary" onClick={handleShow}>
        Add Task
      </Button>
      </Form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tasking Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>Add Task</Modal.Body>
        <Form.Control type="email" placeholder="Enter new task" onChange={(e)=>setText(e.target.value) } value={text}/> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddTask