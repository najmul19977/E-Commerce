import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import First from './Component/First/First.jsx';
import BestSealling from './Component/BestSealling/BestSealling.jsx';
import Blog from './Component/Blog/Blog.jsx';
import DetailsPage from './Component/DetailsPage/DetailsPage.jsx';
import Card from './Component/Card/Card.jsx';
import { productsAndCartData } from './loaders/getCard&Product.js';
import ContsctUs from './Component/ContactUs/ContsctUs.jsx';
import AboutUs from './Component/AboutUs/AboutUs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    loader: productsAndCartData,
    children:[
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/bestsealling',
        element:<BestSealling></BestSealling>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      },
      {
        path:'/about',
        element:<AboutUs></AboutUs>

      },
      {
        path:'/card',
        element:<Card></Card>,
        loader: productsAndCartData,

      },
      {
        path: '/news',
        element: <DetailsPage></DetailsPage>,
     
        
      },
      {
        path: '/news/:id', 
        element: <DetailsPage></DetailsPage>,
        loader: ({ params }) => fetch(`blog.json/${params.id}`)
      },
      {
        path:'contact',
        element:<ContsctUs></ContsctUs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
