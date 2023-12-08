import { useState } from 'react'
import Navbar from './section/navbar/Navbar'
import Properti from './section/Properti/Properti'
import Favorit from './section/favorit/Favorit'
import Residen from './section/residen/Residen'
import Contact from './section/contact/Contact'
import Footer from './section/footer/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Properti/>
      <Favorit/>
      <Residen/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
