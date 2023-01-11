import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux';
import {Button , Modal , Form} from 'react-bootstrap';
import { editTask } from '../../JS/Actions/listTask';
const EditTask = ({task}) => {
    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [newTask , setNewTask] = useState(task.text);
  const handleEdit = (e) => {
    e.preventDefault()
    if(newTask){
       dispatch(editTask(task.id,newTask))
       handleClose()
    }
    else {
        alert ("you could not add an empty text")
    }
  }
  return (
    <div>
<Button variant="outline-primary" onClick={handleShow}>
        Edit Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tasking Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>Edit Task</Modal.Body>
        <Form.Control type="email" placeholder="Enter new task" onChange={(e)=>setNewTask(e.target.value) } value={newTask}/> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditTask