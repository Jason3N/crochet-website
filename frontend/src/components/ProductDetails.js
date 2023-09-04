import { useParams } from 'react-router-dom';
import { ProductItems } from './data';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const product = ProductItems.find(p => p.id === parseInt(id));

  return (
    <div className="prod-details">
      <img className="prod-details-img" src={product.image} alt={product.name} />
      <div className="prod-info">
        <h1>{product.detailedName}</h1>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetails;