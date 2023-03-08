import React, {createRef} from 'react';
import styled from "styled-components";
import styles from "./Login.css";
import {Form, NavLink} from "react-router-dom";
import Label from "../components/UI/Label.jsx";
import Input from "../components/UI/Input.jsx";
import Card from "../components/UI/Card.jsx";
import axios from "axios";
import {baseUrl} from "../utils/constants.jsx";
import H1 from "../components/UI/H1.jsx";
import {useForm} from "react-hook-form";

const RegisterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rebeccapurple;
`;

const Register = (props) => {

   const {register, handleSubmit, errors} = useForm({
      defaultValues: {
         name: '',
         surname: '',
         username: '',
         password: '',
         email: '',
      },
   });

   const nameRef = createRef();
   const surnameRef = createRef();
   const usernameRef = createRef();
   const passwordRef = createRef();
   const emailRef = createRef();

   const submitRegister = async () => {
      await axios.post(`${baseUrl}/auth/signup`, {
         username: usernameRef.current.value,
         password: passwordRef.current.value,
         email: emailRef.current.value,
         name: nameRef.current.value,
         surname: surnameRef.current.value,
      });
   };

   return <RegisterLayout>
      <Card className={styles.loginCard} height={'665px'}>
         <Form className={styles.loginForm} onSubmit={handleSubmit(submitRegister)}>
            <H1 margin={"0.67em 0"}>Register</H1>
            <Label htmlFor={"name"}>Name:</Label>
            <Input ref={nameRef} width={'300px'} id={"name"}></Input>
            <Label htmlFor={"surname"}>Surname:</Label>
            <Input ref={surnameRef} width={'300px'} id={"surname"}></Input>
            <Label htmlFor={"username"}>Username:</Label>
            <Input ref={usernameRef} width={'300px'} id={"username"}></Input>
            <Label htmlFor={"password"}>Password:</Label>
            <Input ref={passwordRef} width={'300px'} id={"password"} type={"password"}></Input>
            <Label htmlFor={"email"}>Email:</Label>
            <Input ref={emailRef} width={'300px'} id={"email"} type={"email"}></Input>
            <Input id={"submit"} type={"submit"} value={"Sign Up!"} width={"125px"} style={{margin: '5px'}}/>
            <NavLink to={"/"}>Go to login</NavLink>
         </Form>
      </Card>
   </RegisterLayout>;
};

export default Register;
