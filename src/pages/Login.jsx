import Header from "../components/Header";

const Login = () => {
  return (
    <div className="relative">
      <Header />
      <div className="absolute top-0 bg-gradient-to-b from-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgimg"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 flex flex-col my-36 mx-auto right-0 left-0">
        <h1 className="font-bold text-3xl text-white mx-2 mb-4">Sign In</h1>
        <input
          type="email"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800"
          placeholder="Email"
        />
        <input
          type="password"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800"
          placeholder="Password"
        />
        <button className="px-20 py-4 my-5 mx-2 rounded-sm text-white bg-red-600">
          Sign In
        </button>
        <p className="text-gray-400 mx-2 text-lg">
          New to Netflix?{" "}
          <span className="text-white cursor-pointer hover:underline">
            Sign up now
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
