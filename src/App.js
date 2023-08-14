import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navbar from "./Components/Navbar"
import Home from "./Pages/Home";
import Carousel from "./Pages/Carousel"
import Error from "./Pages/Error";
import Todo from "./Pages/Todo";
import Components from './Pages/Components'

const App = () => {

  return (
    <Router>
      <Navbar pages={['Home', 'Carousel', 'Todo', 'Components']} />

      <main className="w-[95vw] mx-auto max-h-[90vh] min-h-[85vh] h-[85vh] border mt-2 flex flex-col rounded-xl overflow-y-auto">
        <Routes>
          {/* default */}
          <Route path="/" element={<Home />} />

          {/* pages */}
          <Route exact path='/Home' element={<Home />} />
          <Route exact path='/Carousel' element={<Carousel seconds={2} isPlaying={true} />} />
          {/* <Route exact path='/Todo' element={<Todo />} /> */}
          <Route exact path='/Components' element={<Components />} />

          {/* Error page */}
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </Router>

  )
}
export default App