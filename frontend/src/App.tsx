import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { SignIn } from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import { Blog } from './pages/Blog'
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
