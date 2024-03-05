import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppLayout from './Routes/AppLayout.jsx'
import App from './App.jsx'
import Error from './Routes/Error.jsx'
import About from './Routes/About.jsx'
import Contact from './Routes/Contact.jsx'
import ProfilesPage from './Routes/ProfilesPage.jsx'
import ProfilePage from './Routes/ProfilePage.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {path:'/', element:<App/>},
      {path: '/contact', element: <Contact />},
      {
        path: '/profiles',
        element: <ProfilesPage />,
        children: [
          {
            path: '/profiles/:profileId',
            element: <ProfilePage />,
          },
        ],
      },
      {path: '/about', element: <About />},
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)