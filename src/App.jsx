import { useState } from 'react'
import './App.css'
import Navbar from './sections/navbar/Navbar'
import Banner from './sections/banner/Banner'
import Work from './sections/work/Work'
import Project from './sections/project/Project'
import Service from './sections/service/Service'
import Client from './sections/client/Client'
import Faq from './sections/faq/faq'
import Inquiry from './sections/inquiry/Inquiry'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Work />
      <Project />
      <Service />
      <Client />
      <Faq />
      <Inquiry />
    </>
  )
}

export default App
