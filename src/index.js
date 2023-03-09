import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Navigate, Outlet, RouterProvider, useRouteError} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DogMatching from "./pages/DogMatching";
import {Provider, useSelector} from "react-redux";
import store from "./store";
import {LoadingProvider} from "./utils/Loading";

const Layout = () => {
   return <div>
      <nav></nav>
      <Outlet/>
      <footer></footer>
   </div>;
}

const RootErrorBoundary = () => {
   let error = useRouteError();
   return (
      <div>
         <h1>Uh oh, something went terribly wrong 😩</h1>
         <pre>{error.message || JSON.stringify(error)}</pre>
         <button onClick={() => (window.location.href = "/")}>
            Click here to reload the app
         </button>
      </div>
   );
}

const RouteNavigator = () => {
   const isAuth = useSelector(state => state.auth.isAuth);
   const url = isAuth ? "/app/dog-matching" : "/login";
   return <Navigate to={url}/>;
};

const router = createBrowserRouter([
   {
      path: "/",
      element: <RouteNavigator/>
   },
   {
      path: "/login",
      element: <Login/>,
   },
   {
      path: "/register",
      element: <Register/>,
   },
   {
      path: "/app",
      element: <Layout/>,
      errorElement: <RootErrorBoundary/>,
      children: [
         {
            path: "dog-matching",
            element: <DogMatching/>,
         }
      ]
   },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <div style={{height: '100vh'}}>
            <LoadingProvider>
               <RouterProvider router={router}/>
            </LoadingProvider>
         </div>
      </Provider>

   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
