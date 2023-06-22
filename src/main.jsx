import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Components/Main.jsx';
import Home from './Components/Layout/Home.jsx';
import Reg from './Components/Routes/Reg.jsx';
import Login from './Components/Routes/Login.jsx';
import AuthProvider from './Components/AuthProviders/AuthProvider.jsx';
import Error from './Components/Routes/Error.jsx';
import ViewRecipes from './Components/Routes/ViewRecipes';
import PrivateRoute from './Components/Routes/PrivateRoute';
import Blog from './Components/Layout/Blog';
import Profile from './Components/Layout/Profile';

  
  

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>

      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Reg></Reg>
      },
      {
        path:'*',
        element:<Error></Error>

      },
      {
        path:'/chefs/*',
        element:<Error></Error>
      },
      {
        path:'/*/*',
        element:<Error></Error>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/chefs/:id',
        element:
        <PrivateRoute><ViewRecipes></ViewRecipes></PrivateRoute>,
        loader:({params})=>fetch(`https://deshi-khabar-1m0nsr3p0.vercel.app/chefs/${params.id}`)
        
      },
      {
        path:'/profile',
        element:<Profile></Profile>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider >
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);