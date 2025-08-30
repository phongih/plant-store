import { useDispatch, useSelector } from 'react-redux'
import { addToCart, selectCartItems } from '../store/cartSlice.js'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const inCart = items.some((it) => it.id === product.id)

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <div className="card-body">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <strong>{product.name}</strong>
          <span className="price">${product.price}</span>
        </div>
        <button
          className="btn"
          disabled={inCart}
          onClick={() => dispatch(addToCart(product))}
          aria-disabled={inCart}
          aria-label={inCart ? 'Added' : 'Add to cart'}
          title={inCart ? 'Already in cart' : 'Add to cart'}
        >
          {inCart ? 'Added ✓' : 'Add to Cart'}
        </button>
        <span className="muted">Category: {product.category}</span>
      </div>
    </div>
  )
}
