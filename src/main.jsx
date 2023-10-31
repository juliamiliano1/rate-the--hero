import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Banana } from './Banana.jsx'
import { Hero } from './hero.jsx'
import { Search } from './screens.jsx'
import { Details } from './Details.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Search } from './screens.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/maca",
    element: <div>Hello world!</div>,
  },

  {
    path: "/banana",
    element: <Banana />,
  },
  

  {
    path: "/hero",
    element:<Hero />,
  },

  {
    path: "/busca",
    element:<Search />,
  },

  {
    path: "/detalhes",
    element:<Details />,
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
