import React, {useState} from "react";
import styled from "styled-components";
import Container from "../UI/Container/Container";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const StyledForm = styled.form`
    width: 500px;
    background-color: pink;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    border-right: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`

const FormContainer = styled.div`
    padding-top: 60px;
`


const Form = () => {


const [lname, setLname] = useState('');
const [fname, setFname] = useState('');
const [email, setEmail] = useState('');

const [data, setData] = useState([])

const inputChangeHandler = (e) =>{
    const currentInput = e.target.name
    if (currentInput === 'lname'){
        setLname(e.target.value)
    }else if (currentInput === 'fname'){
        setFname(e.target.value)
    } else if (currentInput === 'email'){
        setEmail(e.target.value)
    }
}


const submitDataHandler = (e) =>{
    e.preventDefault()
    const currentData = {
        lname,
        fname,
        email
    }

    setData([...data, currentData])
    localStorage.setItem('key', JSON.stringify([...data, currentData]))
}

const getDataHandler = () => {
    const data = JSON.parse(localStorage.getItem('key'))
    console.log(data)

}
  return <StyledForm onSubmit={submitDataHandler}>
     
      <FormContainer>
          <h1>User story</h1>
          <Container>
              <Input name='fname' type='text' placeholder='First Name' onChange={inputChangeHandler}/>
          </Container>
          <Container>
              <Input name='lname' type='text' placeholder='Last Name' onChange={inputChangeHandler}/>
          </Container>
          <Container>
              <Input name='email' type='email' placeholder='Email' onChange={inputChangeHandler}/>
          </Container>
          <Button title='Отправить'/>
      </FormContainer>
      <Button title='Получить' type='button' onClick={getDataHandler}/>
  </StyledForm>
};

export default Form;
