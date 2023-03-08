import React, {createRef} from "react";
import Card from "../components/UI/Card.jsx";
import Input from "../components/UI/Input.jsx";
import styled from "styled-components";
import "./Login.css";
import Label from "../components/UI/Label.jsx";
import {Form, NavLink} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../utils/constants.jsx";

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rebeccapurple;
`;

const Logo = styled.img`
  height: 250px;
  width: 300px;
`;

const Login = (props) => {

   const usernameRef = createRef();
   const passwordRef = createRef();

   const handleSubmit = async (event) => {
      event.stopPropagation();
      await axios.post(`${baseUrl}/auth/login`, {
         username: usernameRef.current.value,
         password: passwordRef.current.value,
      });
   };

   return <LoginLayout>
      <Card className={"loginCard"} height={'550px'}>
         <Form className={"loginForm"} onSubmit={handleSubmit}>
            <Logo src="Logo.png" alt="Dog Matcher Logo"/>
            <Label htmlFor={"username"}>Username:</Label>
            <Input ref={usernameRef} width={'300px'} id={"username"}></Input>
            <Label htmlFor={"password"}>Password:</Label>
            <Input ref={passwordRef} width={'300px'} id={"password"} type={"password"}></Input>
            <Input id={"submit"} type={"submit"} value={"Login"} style={{margin: '5px'}}/>
            <NavLink to={"/register"}>Register</NavLink>
         </Form>
      </Card>
   </LoginLayout>
}

export default Login;
