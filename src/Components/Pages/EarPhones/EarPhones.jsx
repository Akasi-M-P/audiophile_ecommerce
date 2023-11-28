import { Link } from "react-router-dom";
const EarPhones = () => {
  return (
    <div>
      EarPhones
      <h2>Earphones Category</h2>
      <ul>
        <li>
          <Link to="/product/earphone1">Earphone 1</Link>
        </li>
        <li>
          <Link to="/product/earphone2">Earphone 2</Link>
        </li>
        {/* Add more earphone products */}
      </ul>
    </div>
  );
};
export default EarPhones;
