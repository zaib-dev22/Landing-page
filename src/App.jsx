import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'

function App() {
  const navitems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Feature", path: "/feature" },
    { name: "Product", path: "/product" },
    { name: "Testimonial", path: "/testimonial" },
    { name: "FAQ", path: "/faq" }
  ]

  return (
    <BrowserRouter>

      <Navbar item={navitems} />

      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/services" element={<h1>Services Page</h1>} />
        <Route path="/feature" element={<h1>Feature Page</h1>} />
        <Route path="/product" element={<h1>Product Page</h1>} />
        <Route path="/testimonial" element={<h1>Testimonial Page</h1>} />
        <Route path="/faq" element={<h1>FAQ Page</h1>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App