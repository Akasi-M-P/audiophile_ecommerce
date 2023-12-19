/* eslint-disable react/prop-types */
import HomeHero from "../components/HomeHero";
import HomeProducts from "../components/HomeProduct";
import HomeShop from "../components/HomeShop";

const Home = ({ activeMenuRoute, setActiveMenuRoute }) => {
  return (
    <div>
      <HomeHero setActiveMenuRoute={setActiveMenuRoute} />
      <HomeShop
        activeMenuRoute={activeMenuRoute}
        setActiveMenuRoute={setActiveMenuRoute}
      />
      <HomeProducts setActiveMenuRoute={setActiveMenuRoute} />
    </div>
  );
};

export default Home;
