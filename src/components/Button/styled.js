import styled from "styled-components";

const Wrapper = styled.button`
    background-color: ${props => backgroundButton[props.type] || '#FFF' };
    color: ${props => textColor[props.type] || '#fff'};
    margin-right: 10px;
    min-width: 60px;
    border: none;
    border-radius: 4px;
    padding: 8px;
    cursor: pointer;
    &:hover{
        opacity: 0.8;
    }
`

const backgroundButton = {
    primary: '#017BFE',
    secondary: '#6C757D',
    success: '#2BA745',
    danger: 'red'
}
const textColor = {
    primary: '#fff',
    secondary: '#ff',
    success: '#fff',
    danger: '#fff',
    warning: '#000'
}
export {Wrapper}