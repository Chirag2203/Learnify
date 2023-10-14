
import './App.css'

import Nav from './Components/nav'
import Footer from './Components/footer'
import Hero from './Components/Hero'

import Contact from './Components/Contact'

 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses'
import Topic from './Components/Topic'

function App() {
 

  return (
    <div className=''>
      <Router>
      <main>
      <div className='main'>
          <div className='gradient' />
        </div>
        <Nav/>
        
        <div className='app'>
        <Routes>
          <Route path='/' element={<Hero />} />
          {/* <Route path='/about' element={<About />} /> */}
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path="/topic" element={<Topic />} />
        </Routes>
        </div>

        <Footer />

        </main>
      </Router>
    </div>
  )
}

export default App
