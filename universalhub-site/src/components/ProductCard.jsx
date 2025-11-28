const ProductCard = ({ product }) => (
  <article className="product-card">
    <img src={product.image} alt={product.name} loading="lazy" />
    <div className="product-card-body">
      <span className="pill">{product.category}</span>
      <h3>{product.name}</h3>
      <p>{product.summary}</p>
      <ul>
        {product.benefits.map((benefit) => (
          <li key={benefit}>{benefit}</li>
        ))}
      </ul>
      <div className="product-meta">
        <span>{product.price}</span>
        <span>⭐ {product.rating}</span>
      </div>
      <a className="cta ghost" href={product.link} target="_blank" rel="noreferrer">
        Visit site
      </a>
    </div>
  </article>
)

export default ProductCard

