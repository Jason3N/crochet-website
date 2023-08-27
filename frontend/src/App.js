import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Contact from './components/Contact.js'
import AboutMe from './components/AboutMe.js'
import Products from './components/Products.js'

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
