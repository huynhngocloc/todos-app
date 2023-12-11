import React from 'react';
import { Wrapper } from './styled';

const Button = ({type, children, onClick}) => {
    return (
        <Wrapper type ={type} onClick={onClick}>
            {children}
        </Wrapper>
    );
};

Button.defaultProps = {
    type:"primary"
}

export default Button;