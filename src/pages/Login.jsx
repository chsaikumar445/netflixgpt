import Header from "../components/Header";

const Login = () => {
  return (
    <div className="">
      <Header />
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="img1"
        />
      </div>
      <form className="absolute flex">
        <label>Sign In</label>
        <input className="p-4" placeholder="Email" />
      </form>
    </div>
  );
};

export default Login;
