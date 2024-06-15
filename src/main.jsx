import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx';
import About from './About/About.jsx';
import Github from './Github/Github.jsx';
import Contact from './Contact/Contact.jsx';
import User from './User/User.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        
      },
      {
        path: "about",
        element: <About />,
        
      },
     
      {
        path: "contact",
        element: <Contact />,
        
      },
      {
        path: "github",
        element: <Github />,
        
      },
      {
        path: "user/:id",
        element: <User />,
        
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
