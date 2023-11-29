import "./Home.css";

const Home = () => {
  return (
    <main className="hero z-0">
      <section className="w-2/3 md:w-1/2 mx-auto py-4 flex flex-col items-center justify-center gap-6 absolute top-44 left-16 md:top-44 md:left-48 lg:left-0 lg:px-20 lg:justify-start lg:items-start">
        <p className="md:text-lg wide-spacing text-gray-400 font-light">
          NEW PRODUCT
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold uppercase text-white">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="text-sm md:text-xl text-gray-300 text-center lg:text-left">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button
          type=""
          className="px-5 py-2 md:px-10 md:py-5 bg-orange-400 cursor-pointer"
        >
          <p className="text-sm uppercase text-white ">See Product</p>
        </button>
      </section>
    </main>
  );
};
export default Home;
