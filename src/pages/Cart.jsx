import { useSelector } from 'react-redux'
import { selectCartItems, selectTotalItems, selectTotalCost } from '../store/cartSlice.js'
import CartItem from '../components/CartItem.jsx'
import { Link } from 'react-router-dom'

export default function Cart() {
  const items = useSelector(selectCartItems)
  const totalItems = useSelector(selectTotalItems)
  const totalCost = useSelector(selectTotalCost)

  return (
    <div className="container section">
      <h2>Your Cart</h2>
      <p className="muted">Total items: <strong>{totalItems}</strong> • Total cost: <strong>${totalCost.toFixed(2)}</strong></p>
      {items.length === 0 ? (
        <p>No items yet. <Link to="/products">Continue shopping</Link>.</p>
      ) : (
        <div style={{overflowX:'auto'}}>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Plant</th>
                <th>Unit Price</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it) => <CartItem key={it.id} item={it} />)}
            </tbody>
          </table>
          <div style={{marginTop:'1rem', display:'flex', gap:'.5rem'}}>
            <button className="btn btn-outline" onClick={() => alert('Checkout: Coming Soon!')}>Checkout</button>
            <Link to="/products" className="btn">Continue Shopping</Link>
          </div>
        </div>
      )}
    </div>
  )
}
