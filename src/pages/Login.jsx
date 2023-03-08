import React, {createRef, useContext} from "react";
import Card from "../components/UI/Card.jsx";
import Input from "../components/UI/Input.jsx";
import styled from "styled-components";
import styles from "./Login.module.css";
import Label from "../components/UI/Label.jsx";
import {Form, NavLink} from "react-router-dom";
import axios from "axios";
import {baseUrl} from "../utils/constants.jsx";
import {LoadingContext} from "../utils/LoadingProvider";

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

   const usernameRef = createRef();
   const passwordRef = createRef();
   const loadingContext = useContext(LoadingContext);

   const handleSubmit = async (event) => {
      event.stopPropagation();
      loadingContext.showLoading();
      try {
         await axios.post(`${baseUrl}/auth/login`, {
            username: usernameRef.current.value,
            password: passwordRef.current.value,
         });
      } catch (e) {
         console.log(e);
      } finally {
         loadingContext.hideLoading();
      }
   };

   return <LoginLayout>
      <Card className={styles.loginCard} height={'550px'}>
         <Form className={styles.loginForm} onSubmit={handleSubmit}>
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
