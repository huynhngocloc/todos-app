import React from 'react';
import { useState } from 'react';
import { InputForm, Wrapper } from './styled';
import Button from '@/components/Button';
import { useDispatch } from 'react-redux';
import { todoAdd } from '@/store/modules/todo/actions';


const TodoForm = () => {

    // useDispatch dung de day du lieu len reducer
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    const handleSave = () => {
        if(value){
            // day du lieu len reducer
            dispatch(todoAdd(value))
            setValue('')
        }
    }


    return (
        <Wrapper>
            <InputForm onChange={handleChange} value={value}></InputForm>
            <Button onClick={handleSave}>Save</Button>
        </Wrapper>
    );
};

export default TodoForm;