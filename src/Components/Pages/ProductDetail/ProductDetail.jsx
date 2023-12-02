/* eslint-disable react/prop-types */
// ProductDetail.jsx
import { useParams, Link, useNavigate } from "react-router-dom";
const ProductDetail = ({ data }) => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = data.find((p) => p.id.toString() === productId);

  console.log("Product ID from URL:", productId);
  console.log(
    "All product IDs in data:",
    data.map((p) => p.id)
  );

  if (!product) {
    console.error(`Product with ID ${productId} not found`);
    return <div>Loading...</div>;
  }

  console.log("Product found:", product);

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div>
      ProductDetail
      <Link to="`/product/${productId}`">
        <div>
          <button onClick={goBack}>Go Back</button>
        </div>
      </Link>
      <img src={product.image.mobile} alt={product.name} />
      <p>new product</p>
      <h1>{product.name}</h1>
      <h1>{product.category}</h1>
      <p>{product.description}</p>
      <h1>ADD TO CART</h1>
      <p>{product.features}</p>
      <ul>
        {product.includes.map((item, index) => (
          <li key={index}>
            <p>
              <span>{item.quantity}x</span>
              {item.item}
            </p>
          </li>
        ))}
      </ul>
      <img src={product.gallery.first.mobile} alt={product.name} />
      <img src={product.gallery.second.mobile} alt={product.name} />
      <img src={product.gallery.third.mobile} alt={product.name} />
      <h1 className="uppercase">you may also like</h1>
      <div>
        {product.others.map((item, index) => (
          <div key={index}>
            <img src={item.image.mobile} alt="" />
            <h1>{item.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
