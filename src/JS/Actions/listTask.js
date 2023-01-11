import  { ADD_TASK , DELETE_TASK, EDIT_TASK, DONE_TASK } from '../ActionsTypes/listTask';

export const addTask = (newTask) => {
    return {
        type : ADD_TASK,
        payload : newTask,
    }
}

export const deleteTask = (id) => {
    return {
        type : DELETE_TASK,
        payload : id,

    }
}
export const editTask = (id,newTask) => {
    return {
        type : EDIT_TASK,
        payload :{id, newTask},
    }
}

export const doneTask = (id) => {
    return {
        type : DONE_TASK, 
        payload : id,
    }
}