import React from 'react';
import  { TodoContainer, TodoWrapper } from './styled';
import TodoTitle from './components/TodoTitle';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const Todo = () => {
    return (
        <TodoWrapper>
            <TodoContainer>
                <TodoTitle></TodoTitle>
                <TodoForm></TodoForm>
                <TodoList></TodoList>
            </TodoContainer>
        </TodoWrapper>
    );
};

export default Todo;