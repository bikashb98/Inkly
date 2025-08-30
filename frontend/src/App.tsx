import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import { SignIn } from './pages/SignIn'
import {SignUp} from './pages/SignUp'
import { Blog } from './pages/Blog'
import {Blogs} from './pages/Blogs'
import { Editor } from './pages/NewPost'

function App() {


  return (
    <>
      <BrowserRouter>  
        <Routes>   
          
          <Route path='/new-story' element= {<Editor />} />   
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
