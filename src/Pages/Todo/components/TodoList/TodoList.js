import React from 'react';
import { Wrapper } from './styled';
import TodoItem from './TodoItem';
import { selectTodoData } from '@/store/modules/todo/selectors';
import { useSelector } from 'react-redux';

const TodoList = () => {
    const todoData = useSelector(selectTodoData)
    return (
        <Wrapper>
            {
                todoData.map(todo => 
                    <TodoItem key={todo.id} value={todo.value} id={todo.id} status={todo.status}>

                    </TodoItem> )
            }
           
        </Wrapper>
    );
};

export default TodoList;