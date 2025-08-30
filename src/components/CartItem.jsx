import { useDispatch } from 'react-redux'
import { increment, decrement, removeItem } from '../store/cartSlice.js'

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  return (
    <tr>
      <td style={{width:'80px'}}>
        <img src={item.image} alt={item.name} style={{width:'64px', height:'48px', objectFit:'cover', borderRadius:8}} />
      </td>
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <div className="qty">
          <button className="btn btn-outline" onClick={() => dispatch(decrement(item.id))} aria-label="decrease">−</button>
          <span>{item.quantity}</span>
          <button className="btn btn-outline" onClick={() => dispatch(increment(item.id))} aria-label="increase">+</button>
        </div>
      </td>
      <td>${(item.price * item.quantity).toFixed(2)}</td>
      <td>
        <button className="btn btn-outline" onClick={() => dispatch(removeItem(item.id))}>Delete</button>
      </td>
    </tr>
  )
}
