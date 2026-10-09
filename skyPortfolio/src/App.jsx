import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Skill from './pages/Skill'
import Project from './pages/Project'
// import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (

    <div className="relative min-h-screen w-full overflow-hidden bg-[#0F0F0F] text-white">

      {/* Center Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2
          h-[250px] w-[250px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full
          bg-purple-600
          opacity-80
          blur-[40px]
          shadow-[0_0_80px_60px_rgba(147,51,234,0.6)]
        "
      />

      {/* Top Right Purple Glow */}
      <div
        className="
          pointer-events-none
          absolute -right-16 -top-16
          h-28 w-28
          rounded-full
          bg-purple-600
          opacity-70
          blur-[30px]
          shadow-[0_0_60px_80px_rgba(147,51,234,0.5)]
        "
      />

      {/* ================= BLUR OVERLAY ================= */}

      <div className="pointer-events-none absolute inset-0 bg-black/20 backdrop-blur-md "/>

      {/* ================= MAIN CONTENT ================= */}

      <div className="relative z-10 min-h-screen w-full">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/project" element={<Project />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <Footer/>

      </div>

    </div>

  )
  
}

export default App