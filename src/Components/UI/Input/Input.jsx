import styled from "styled-components";

const StyledInput = styled.input`
    width: 300px;
    font-size: 18px;
    height: 30px;
    border-radius: 10px;
    border-color: #fff;
    padding-left: 20px;
    color: yellow;
    &:focus{
        outline: none;
    }

`


const Input = ({name, type, placeholder, onChange, value}) => {
  return(
      <div>
          <StyledInput
          name ={name}
          type = {type}
          placeholder = {placeholder}
          onChange={onChange}
          value={value}
          />
      </div>
  )
};

export default Input;
