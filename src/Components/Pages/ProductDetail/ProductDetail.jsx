import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  return (
    <div>
      ProductDetail
      <p>Product ID: {productId}</p>
    </div>
  );
};
export default ProductDetail;
