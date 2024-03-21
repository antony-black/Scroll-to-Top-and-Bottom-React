export default function List({ data }) {
  const renderProducts = () => {
    return (
      <ul className="product-list">
        {data?.products?.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    );
  };
  return renderProducts();
}
