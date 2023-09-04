import { useParams } from 'react-router-dom';
import { ProductItems } from './data';

function ProductDetails() {
  const { id } = useParams();

  const product = ProductItems.find(p => p.id === parseInt(id));

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: {product.price}</p>
    </div>
  );
}

export default ProductDetails;