/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Speakers = ({ data }) => {
  return (
    <>
      <div>Speakers</div>
      <ul>
        {data
          .filter((product) => product.category === "speakers")
          .map((product) => (
            <div key={product.id}>
              <img src={product.image.mobile} alt={product.name} />
              <p className="uppercase text-orange-400">
                {product.new === true ? "new product" : ""}
              </p>
              <h1>{product.name}</h1>
              <h1>{product.category}</h1>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`}>
                <button
                  type=""
                  className="px-5 py-2 md:px-10 md:py-5 bg-orange-400 cursor-pointer"
                >
                  <p className="text-sm uppercase text-white ">See Product</p>
                </button>
              </Link>
            </div>
          ))}
      </ul>
    </>
  );
};
export default Speakers;
