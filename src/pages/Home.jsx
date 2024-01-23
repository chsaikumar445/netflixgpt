import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-black z-10 w-full h-full">
      <section>
        <div className="flex justify-between bg-gradient-to-b from-black to-transparent w-full">
          <Header />
          <div className="absolute right-12 mt-10 z-20">
            <select className="mr-10 px-4 py-2 text-l bg-transparent text-white  border-2">
              <option className="bg-black px-4 py-2">English</option>
              <option className="bg-black px-4 py-2">Spanish</option>
            </select>
            <Link to={"/login"}>
              <button className="text-white bg-red-600 pl-4 pr-4 pt-2 pb-2 rounded-md">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className="absolute">
          <img
            className="object-cover h-screen w-screen"
            src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            alt="bgimgnetflix"
          />
        </div>
        <div className=" text-white  text-center z-20 absolute left-20 top-20 mx-20 my-40 ml-40">
          <h1 className="text-5xl font-bold">
            Unlimited Movies,Tv shows, and More
          </h1>
          <p className="text-3xl text-center mt-5">
            Watch Anywhere,cancel anytime
          </p>
          <p className="text-3xl text-center mt-5">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="my-8 text-center">
            <input
              className="px-20 py-4 bg-transparent border-2"
              placeholder="Email"
            />
            <button className="bg-red-700 px-4 py-4 ml-4">Get Started</button>
          </div>
        </div>
      </section>
      <div className="bg-black  absolute h-screen w-full opacity-65 top-0 left-0"></div>
    </div>
  );
};

export default Home;
