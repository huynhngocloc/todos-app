import React from 'react';
import { useDispatch } from 'react-redux';
import { Wrapper, TodoName } from './styled';
import Button from '@/components/Button';
import { todoRemove, todoToggleStatus } from '@/store/modules/todo/actions';

const TodoItem = ({value, id, status}) =>  {

    const dispatch = useDispatch()

    const handleRemove = () =>{
        const isConfirned = window.confirm("bạn có chăc chắn muốn xóa")

        if(isConfirned){
            dispatch(todoRemove(id))
        }
    }

    const handleToggleStatus = () => {
        dispatch(todoToggleStatus(id))
    }
    return (
        <Wrapper>
            <TodoName status={status}>
                <span onClick={handleToggleStatus}>{value}</span>
            </TodoName>
            <Button type="danger" onClick={handleRemove}>Remove</Button>
        </Wrapper>
    );
};

export default TodoItem;