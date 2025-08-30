import ProductCard from '../components/ProductCard.jsx'
import { PRODUCTS, CATEGORIES } from '../products.js'

export default function Products() {
  return (
    <div className="container section">
      <h2>Our Houseplants</h2>
      <div className="categories">
        {CATEGORIES.map(c => <span key={c} className="chip">{c}</span>)}
      </div>

      {CATEGORIES.map((cat) => (
        <section key={cat} className="section" style={{paddingTop: '1rem'}}>
          <h3 style={{marginBottom:'.5rem'}}>{cat}</h3>
          <div className="grid">
            {PRODUCTS.filter(p => p.category === cat).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
