import { useState } from 'react'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Banner from './sections/banner/Banner'
import Work from './sections/work/Work'
import Project from './sections/project/Project'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Project />
    </>
  )
}

export default App
