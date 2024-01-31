import { useRef, useState } from "react";
import Header from "../components/Header";
import validdata from "../utils/validdata";
import { USER_AVATAR } from "../utils/constants";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [toggleForm, setToggleFrom] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // console.log(apiKey);
  const email = useRef();
  const password = useRef();
  const name = useRef();

  const toggleSignInForm = () => {
    setToggleFrom(!toggleForm);
  };

  const handleValidation = () => {
    // console.log(email.current.value, password.current.value);
    const message = validdata(email.current.value, password.current.value);
    if (message) {
      setErrorMessage(message);
      return;
    }
    if (toggleForm) {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          // const user = userCredential.user;
          // navigate("/browse");
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
        });
    } else {
      //sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          // const user = userCredential.user;
          // navigate("/browse");
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          });
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage);
          // ..
        });
    }
  };

  return (
    <div className="h-full w-screen max-w-4xl">
      <div className="bg-black absolute h-full w-full opacity-70 z-10  top-0 left-0"></div>
      <Header />
      <div className="absolute top-0 bg-gradient-to-b from-white ">
        <img
          className="object-cover h-screen w-screen"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgimg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-4 bg-black w-4/12 z-20 flex flex-col my-36 mx-auto right-0 left-0 bg-opacity-85">
        <h1
          className="font-bold text-3xl text-white mx-2 mb-4"
          onClick={toggleSignInForm}>
          {toggleForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          type="email"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800 text-white"
          placeholder="Email"
        />
        {!toggleForm ? (
          <input
            ref={name}
            type="text"
            className="py-4 px-4 m-2 rounded-sm bg-gray-800 text-white"
            placeholder="Full Name"
          />
        ) : (
          ""
        )}
        <input
          ref={password}
          type="password"
          className="py-4 px-4 m-2 rounded-sm bg-gray-800 text-white"
          placeholder="Password"
        />
        {errorMessage ? (
          <p className="text-white p-4 m-2 bg-orange-500">{errorMessage}</p>
        ) : (
          ""
        )}
        <button
          className="px-20 py-4 my-5 mx-1 rounded-sm text-white bg-red-600"
          onClick={handleValidation}>
          {toggleForm ? " Sign In" : " Sign Up"}
        </button>
        <span className="text-gray-400 mx-2 text-lg" onClick={toggleSignInForm}>
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
        </span>
      </form>
    </div>
  );
};

export default Login;
