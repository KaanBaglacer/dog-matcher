import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, Outlet, RouterProvider, useRouteError} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Layout = () => {
   return <></>;
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


const router = createBrowserRouter([
   {
      path: "/",
      element: <Login/>
   },
   {
      path: "/register",
      element: <Register/>,
   },
   {
      path: "/home",
      element: <Layout/>,
      children: [
         {
            path: "",
            element: <Outlet/>,
            errorElement: <RootErrorBoundary/>,
         }
      ]
   }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
