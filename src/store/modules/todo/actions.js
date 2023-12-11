import { createAsyncThunk } from '@reduxjs/toolkit'
import { insertTodo } from './servicers'

const todoAdd = createAsyncThunk('todo/add', (value) => {
    const todo = insertTodo(value)

    console.log('Todo', todo)
    // reutrn lai reducer
    return todo;
})

const todoRemove = createAsyncThunk('todo/remove', (id) =>{
    // call ipi to remove todo
    return id;
})

const todoToggleStatus = createAsyncThunk('todo/todoToggleStatus', (id) =>{
    return id;
})

export {
    todoRemove,
    todoAdd,
    todoToggleStatus
}