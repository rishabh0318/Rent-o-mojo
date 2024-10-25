import React from 'react'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './components/Errorpage'
import AppLayout from './components/AppLayout';
import Home from './components/Home';
import Cart from './components/Cart';
import Product from './components/Product';
import ProductDetail from './components/ProductDetail';

const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Errorpage/>,
    children:[
       {
    path:"/",
    element:<Home/>
  },
  {
     path:"About",
     element:<Product/>
  },
  {
    path:"/About/:id",
    element:<ProductDetail/>
  },
  {
    path:"cart",
    element:<Cart/>
  }
],
  },
])

const App = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default App