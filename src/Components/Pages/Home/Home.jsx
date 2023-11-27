import "./Home.css";

const Home = () => {
  return (
    <main className="hero-container w-full ">
      <section className="hero-section sm:flex sm:flex-col sm:justify-center sm:items-center gap-8 h-full">
        <p className="mt-24 wide-spacing text-gray-400 text-center font-thin text-lg uppercase">
          NEW PRODUCT
        </p>
        <h1 className="text-white text-center  text-6xl font-bold uppercase">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="text-gray-400 text-center text-2xl font-thin px-20 mt-7">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button type="" className="mt-5 bg-orange-500 text-white px-20 py-5">
          <p className="uppercase text-xl ">See Product</p>
        </button>
      </section>
    </main>
  );
};
export default Home;
