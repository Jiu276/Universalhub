import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const Products = () => (
  <div className="page">
    <section className="page-hero">
      <p className="eyebrow">Product Lab</p>
      <h1>Real-world tested gear, platforms, and services.</h1>
      <p className="hero-description">
        Every recommendation is paired with lab notes, pricing, and rollout
        ideas so your team can fast-track pilots.
      </p>
    </section>

    <section className="section">
      <div className="grid three">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  </div>
)

export default Products

