import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

import './App.css'

import Home from './pages/Home'
import Courses from "./pages/Courses"
import Scholarship from "./pages/Scholarship"
import Result from './pages/Result'
import Events from './pages/Events'
import Contact from './pages/Contact'




function App() {


  return (
    <><div className="app">

   

        <Navbar></Navbar>

 

        <Routes>

          <Route path="/" element={<Home />}> </Route>
          <Route path="/Home" element={<Home />}> </Route>
          <Route path="/Courses" element={<Courses />}> </Route>
           <Route path="/Result" element={<Result />}> </Route>
          <Route path="/Events" element={<Events />}> </Route>
          <Route path="/Contact" element={<Contact />}> </Route>
          <Route path="/Scholarship" element={<Scholarship/>}> </Route>



        </Routes>
 
        <Footer></Footer>
 
</div>

    </>
  )
}

export default App
