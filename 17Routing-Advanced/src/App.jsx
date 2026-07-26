import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Contact from './Pages/Contact'
import NotFound from './Pages/NotFound'
import Men from './Pages/Men'
import Kids from './Pages/Kids'
import Course from './Pages/Course'
import CourseDetail from './Pages/CourseDetail'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='min-h-screen w-full bg-black text-white'>
      <Navbar/>
      <Navbar2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/course/:id' element={<CourseDetail/>}/>
        <Route path='/product' element={<Product/>}> 
          <Route path='men' element={<Men/>} />
          <Route path='kid' element={<Kids/>} />
        </Route>
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App