
import './App.css'

import Nav from './Components/nav'
import Footer from './Components/footer'
import Hero from './Components/Hero'

import Contact from './Components/Contact'

 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Courses from './Components/Courses'

import Topic from './Components/Topic'
import Article from './Components/Article'
import Faq from './Components/Faqs'

import CourseID from './CourseID'
import Quiz from './Quiz'


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
          <Route path="/courses/:id" element={<CourseID />} />
          <Route path="/courses/:id/article" element={<Article />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path="/topic" element={<Topic />} />
          <Route path="/article" element={<Article />} />
          <Route path="/quiz" element={<Quiz />} />

          <Route path="/Faq" element={<Faq />} />
        </Routes>
        </div>

        <Footer />

        </main>
      </Router>
    </div>
  )
}

export default App
