import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home/Home';
import './index.css'
import PokeDetails from './pages/PokeDetails/PokeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/:pokeId",
    element: <PokeDetails/>
  },


]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <RouterProvider router={router}/>

)
