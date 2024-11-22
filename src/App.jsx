import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Navbar from './components/Navbar'
import BlogDetails from './components/BlogDetails'
<<<<<<< HEAD
=======
import Counter from './components/Counter'
import Form from './components/Forms'
import AddBlog from './components/AddBlog'
>>>>>>> 3d057bb25cb3ad4e63668f8aac6a09278a9ffcb5

function App() {
  return (
    <Router>
<<<<<<< HEAD
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetails />} />
        </Routes>

      </div>
    </Router>
=======
    <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:id" element={<BlogDetails />} />
      <Route path='/counter' element={<Counter />}/>
      <Route path='/form' element={<Form />} />
      <Route path='/add-blog' element={<AddBlog />} />
    </Routes>
   
    </div>
  </Router>
 
>>>>>>> 3d057bb25cb3ad4e63668f8aac6a09278a9ffcb5

  )

}
export default App;


