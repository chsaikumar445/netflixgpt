import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [toggleForm, setToggleFrom] = useState(true);

  const toggleSignInForm = () => {
    const newval = !toggleForm;
    setToggleFrom(!toggleForm);
  };

  return (
    <div className="relative ">
      <Header />
      <div className="absolute top-0 bg-gradient-to-b from-white">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgimg"
        />
      </div>
      <form className="absolute p-12 bg-black w-4/12 flex flex-col my-36 mx-auto right-0 left-0 bg-opacity-85">
        <h1
          className="font-bold text-3xl text-white mx-2 mb-4"
          onClick={toggleSignInForm}>
          {toggleForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="email"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800"
          placeholder="Email"
        />
        {!toggleForm ? (
          <input
            type="text"
            className="py-4 px-4 m-2 rounded-sm bg-gray-800"
            placeholder="Full Name"
          />
        ) : (
          ""
        )}
        <input
          type="password"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800"
          placeholder="Password"
        />
        <button className="px-20 py-4 my-5 mx-2 rounded-sm text-white bg-red-600">
          {toggleForm ? " Sign In" : " Sign Up"}
        </button>
        <p className="text-gray-400 mx-2 text-lg" onClick={toggleSignInForm}>
          {toggleForm ? (
            <p>
              New to Netflix?
              <span className="text-white cursor-pointer hover:underline">
                Sign up now
              </span>
            </p>
          ) : (
            <p>
              Have an account?
              <span className="text-white cursor-pointer hover:underline">
                Sign in
              </span>
            </p>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
