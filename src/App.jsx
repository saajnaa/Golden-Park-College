
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'

import Home from './component/Home'
import Courses from "./pages/Courses"
import Scholarship from './pages/Scholarship'
import Result from './pages/Result'
import Events from './pages/Events'
import Contact from './pages/Contact'

import Navbar from "./component/Navbar"


const router = createBrowserRouter([


  {

    path: "/",
    element: <Home />

  },




  {

    path: "/home",
    element: <Home />

  },

  {

    path: "/Courses",
    element: <Courses />

  },

  {

    path: "/Scholarship",
    element: < Scholarship />

  },

  {

    path: "/Result",
    element: <Result></Result>

  },

  {

    path: "/Events",
    element: <Events></Events>

  },

  {

    path: "/Contact",
    element: <Contact></Contact>

  }




])



function App() {


  return (
    <>
 
      <RouterProvider router={router}></RouterProvider>


    </>
  )
}

export default App
