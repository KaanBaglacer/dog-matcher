import React from 'react';
import styled from "styled-components";
import styles from "./Login.module.css";
import {Form, NavLink} from "react-router-dom";
import Label from "../components/UI/Label.jsx";
import Input from "../components/UI/Input.jsx";
import Card from "../components/UI/Card.jsx";
import H1 from "../components/UI/H1.jsx";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {registerRequest} from "../store/auth-slice";

const RegisterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rebeccapurple;
`;

const Register = () => {

   const defaultValues = {name: '', surname: '', username: '', password: '', email: ''};

   const {register, handleSubmit} = useForm({defaultValues: defaultValues});
   const dispatch = useDispatch();
   const submitRegister = async (data) => {
      dispatch(registerRequest(data));
   };

   return <RegisterLayout>
      <Card className={styles.loginCard} height={'665px'}>
         <Form className={styles.loginForm} onSubmit={handleSubmit(submitRegister)}>
            <H1 margin={"0.67em 0"}>Register</H1>
            <Label htmlFor={"name"}>Name:</Label>
            <Input {...register("name")} width={'300px'} id={"name"}></Input>
            <Label htmlFor={"surname"}>Surname:</Label>
            <Input {...register("surname")} width={'300px'} id={"surname"}></Input>
            <Label htmlFor={"username"}>Username:</Label>
            <Input {...register("username")} width={'300px'} id={"username"}></Input>
            <Label htmlFor={"password"}>Password:</Label>
            <Input {...register("password")} width={'300px'} id={"password"} type={"password"}></Input>
            <Label htmlFor={"email"}>Email:</Label>
            <Input {...register("email")} width={'300px'} id={"email"} type={"email"}></Input>
            <Input id={"submit"} type={"submit"} value={"Sign Up!"} width={"125px"} style={{margin: '5px'}}/>
            <NavLink to={"/"}>Go to login</NavLink>
         </Form>
      </Card>
   </RegisterLayout>;
};

export default Register;
