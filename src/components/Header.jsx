import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectTotalItems } from '../store/cartSlice.js'

export default function Header() {
  const total = useSelector(selectTotalItems)
  return (
    <header className="header">
      <div className="container nav">
        <Link to="/" className="brand">GreenLeaf</Link>
        <nav className="navlinks">
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/cart">Cart <span aria-label="cart" className="icon">🛒</span> {total}</NavLink>
        </nav>
      </div>
    </header>
  )
}
