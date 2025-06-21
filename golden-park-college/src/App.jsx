
import './App.css'

import Homepage from './component/Homepage'
import Courses from "./pages/Courses"
import Scholarship from './pages/Scholarship'
import Result from './pages/Result'
import Events from './pages/Events'
import Contact from './pages/Contact'

import { RouterProvider, createBrowserRouter } from "react-router-dom"


const router = createBrowserRouter([


  {

    path: "/",
    element: Homepage

  },

  {

    path: "/Courses",
    element: <Courses />

  },

  {

    path: "/Scholarschip",
    element: < Scholarship />

  },

  {

    path: "/Result",
    element: < Result />

  },

  {

    path: "/Events",
    element: <Events />

  },

  {

    path: "/Contact",
    element: < Contact />

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
