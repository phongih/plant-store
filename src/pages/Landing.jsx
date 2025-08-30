import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="bg-landing">
      <div className="container">
        <div className="hero">
          <h1 style={{fontSize:'2rem', margin:'0 0 .5rem'}}>GreenLeaf Plant Store</h1>
          <p className="muted" style={{marginBottom:'1rem'}}>
            Welcome to GreenLeaf, your eco-friendly houseplant shop. We bring vibrant, air-purifying plants to your home and office.
            Explore our curated collection and grow your indoor oasis.
          </p>
          <Link to="/products" className="btn">Get Started →</Link>
        </div>
      </div>
    </section>
  )
}
