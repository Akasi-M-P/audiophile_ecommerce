import "./Home.css";

const Home = () => {
  return (
    <main className="hero">
      <section className="w-2/3 mx-auto flex flex-col items-center justify-center gap-4 absolute top-44 left-16">
        <p className=" wide-spacing text-gray-400 font-light">NEW PRODUCT</p>
        <h1 className="text-4xl font-extrabold uppercase text-white">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="text-sm text-gray-300 text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button type="" className="px-5 py-2 bg-orange-400">
          <p className="text-sm uppercase text-white ">See Product</p>
        </button>
      </section>
    </main>
  );
};
export default Home;
