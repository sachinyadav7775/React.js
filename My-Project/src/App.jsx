import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skill'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'

const App = () => {

    return (

        <div className="relative min-h-screen w-full overflow-hidden bg-[#080b09] text-white">

            {/* Background Glow */}
            <div className="pointer-events-none fixed -left-32 top-40 h-96 w-96 rounded-full bg-green-500/15 blur-[130px]" />

            <div className="pointer-events-none fixed -right-32 bottom-10 h-96 w-96 rounded-full bg-emerald-500/10 blur-[130px]" />

            <Navbar />

            <main className="relative z-10 pt-24">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/skill" element={<Skills />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </main>

            <Footer />

        </div>

    )
    
}

export default App