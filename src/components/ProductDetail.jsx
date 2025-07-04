import { useParams } from 'react-router-dom';
import products from '../data';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div className="text-center mt-10 text-red-500">Produk tidak ditemukan</div>;

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow-md bg-white">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-xl font-semibold text-green-600">Rp {product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductDetail;
