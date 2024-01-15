import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-black bg-gradient-to-b from-black">
      <section>
        <div className="flex justify-between bg-black bg-gradient-to-b from-black">
          <Header />
          <div className="absolute right-0 mr-10 mt-5 ">
            <select className="mr-10 p-3 bg-white">
              <option>English</option>
              <option>Spanish</option>
            </select>
            <button className="text-white bg-red-600 pl-4 pr-4 pt-2 pb-2">
              Sign In
            </button>
          </div>
        </div>
        <div className="absolute">
          <img
            src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="bgimg"
          />
        </div>
        <div className="relative z-11 text-white top-60 left-40 w-1/2 m-auto">
          <h1 className="text-4xl">Unlimited Movies,Tv shows, and More</h1>
          <p>Watch Anywhere</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
