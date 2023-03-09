import {createSlice} from '@reduxjs/toolkit';
import axios from "axios";
import {baseUrl, keys} from "../utils/constants";
import {uiActions} from "./ui-slice";

const authSlice = createSlice({
   name: 'auth',
   initialState: {isAuth: false},
   reducers: {
      login(state, action) {
         state.isAuth = true;
      },
      logout(state, action) {
         state.isAuth = false;
         localStorage.removeItem(keys.user);
      },
   },
});

export const loginRequest = (data) => {
   return async (dispatch) => {
      dispatch(uiActions.startLoading());
      try {
         const loginResponse = await axios.post(`${baseUrl}/auth/login`, data);
         if (!!loginResponse) {
            localStorage.setItem(keys.user, JSON.stringify(loginResponse.data));
         }
      } catch (e) {
         console.log(e);
      } finally {
         dispatch(uiActions.endLoading())
      }
   };
};

export const registerRequest = (data) => {
   return async (dispatch) => {
      dispatch(uiActions.startLoading());
      try {
         await axios.post(`${baseUrl}/auth/signup`, data);
      } catch (e) {
         console.log(e);
      } finally {
         dispatch(uiActions.endLoading())
      }
   };
};

export const authActions = authSlice.actions;

export default authSlice;
