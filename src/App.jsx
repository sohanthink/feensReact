import { useState } from 'react'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Banner from './sections/banner/Banner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
    </>
  )
}

export default App
