import React from "react";
import styled from 'styled-components'

const StyledButton = styled.button`
width: 100px;
height: 40px;
background-color: ${(props)=>(props.primary ? 'blue': 'red')};
border-radius: 18px;
margin-top: 30px;
cursor: pointer;

`
const Button = (props)=>{
    return (
        <StyledButton {...props}>{props.title}</StyledButton>
    )
}

export default Button