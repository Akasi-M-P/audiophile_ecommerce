import "./Home.css";

const Home = () => {
  return (
    <main className="hero">
      <section className="w-2/3 mx-auto flex flex-col items-center justify-center h-full gap-14 pt-28">
        <p className="text-2xl wide-spacing text-gray-400">NEW PRODUCT</p>
        <h1 className="text-6xl font-extrabold uppercase text-white">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="text-2xl text-gray-300 text-center">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <button type="" className="px-8 py-5 bg-orange-400">
          <p className="text-xl uppercase text-white ">See Product</p>
        </button>
      </section>
    </main>
  );
};
export default Home;
