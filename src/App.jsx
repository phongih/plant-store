import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Landing from './pages/Landing.jsx'
import Products from './pages/Products.jsx'
import Cart from './pages/Cart.jsx'

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}
