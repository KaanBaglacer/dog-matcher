import React from "react";
import Card from "../components/UI/Card.jsx";
import Input from "../components/UI/Input.jsx";
import styled from "styled-components";
import styles from "./Login.module.css";
import Label from "../components/UI/Label.jsx";
import {Form, NavLink, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {loginRequest} from "../store/auth-slice";

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: rebeccapurple;
`;

const Logo = styled.img`
  height: 250px;
  width: 300px;
`;

const Login = (props) => {

   const navigate = useNavigate();
   const {register, handleSubmit} = useForm({defaultValues: {username: '', password: ''}});
   const dispatch = useDispatch();

   const submit = async (data) => {
      await dispatch(loginRequest(data));
      navigate('/app/dog-matching');
   };

   return <LoginLayout>
      <Card className={styles.loginCard} height={'550px'}>
         <Form className={styles.loginForm} onSubmit={handleSubmit(submit)}>
            <Logo src="Logo.png" alt="Dog Matcher Logo"/>
            <Label htmlFor={"username"}>Username:</Label>
            <Input {...register("username")} width={'300px'} id={"username"}></Input>
            <Label htmlFor={"password"}>Password:</Label>
            <Input {...register("password")} width={'300px'} id={"password"} type={"password"}></Input>
            <Input id={"submit"} type={"submit"} value={"Login"} style={{margin: '5px'}}/>
            <NavLink to={"/register"}>Register</NavLink>
         </Form>
      </Card>
   </LoginLayout>
}

export default Login;
