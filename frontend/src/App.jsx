import { Routes, Route } from "react-router-dom"

import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

import './App.css'

import Home from './pages/Home'
 import Courses from "./pages/Courses"
import Scholarship from "./pages/Scholarship"
import Result from './pages/Result'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

import Dcom from './courses-page/Dcom'
import Civil from './courses-page/Civil'
import Electrical from './courses-page/Electrical'
import Ha from './courses-page/Ha'
 

function App() {


  return (
    <><div className="app">



      <Navbar></Navbar>



      <Routes>

        <Route path="/" element={<Home />}> </Route>
        <Route path="/Home" element={<Home />}> </Route>
        <Route path="/Courses" element={<Courses />}> </Route>
        <Route path="/Result" element={<Result />}> </Route>
        <Route path="/Contact" element={<Contact />}> </Route>
        <Route path="/Scholarship" element={<Scholarship />}> </Route>
        <Route path="/Gallery" element={<Gallery />}> </Route>
        <Route path="/Ha" element={<Ha />}> </Route>


        <Route path="/dcom" element={<Dcom />}> </Route>
        <Route path="/Civil" element={<Civil />}> </Route>
        <Route path="/Electrical" element={<Electrical />}> </Route>
 


      </Routes>

      <Footer></Footer>

    </div>

    </>
  )
}

export default App
