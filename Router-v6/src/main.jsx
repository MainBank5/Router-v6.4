import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './Routes/Error.jsx'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import Projects from './Routes/Projects.jsx'
import AppLayout from './Routes/AppLayout.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {path:'/', element:<AppLayout/>, errorElement: <Error/>, children: [ 
  {path:'/', element:<App/>},
  {path:'/contact', element:<Contact/>},
  {path:'/project', element:<Projects/>},
  {path:'/about', element:<About/>},]}
 

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
