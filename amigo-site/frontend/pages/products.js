import products from "../data/products.json";

export default function Products() {
  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p.slug}>
          <h3>{p.title}</h3>
        </div>
      ))}
    </div>
  );
}