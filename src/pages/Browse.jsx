import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Browse = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  return (
    <div className="relative">
      <Header />
      <div className="absolute right-20 top-6 flex justify-between ">
        <img
          className=" w-10 z-10"
          src="https://occ-0-92-90.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
          alt="icon"
        />
        <button
          onClick={handleSignOut}
          className="bg-red-600 pl-2 pr-2 ml-2 text-white z-10 rounded-md">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
