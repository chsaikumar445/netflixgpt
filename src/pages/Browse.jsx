import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { USER_AVATAR } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  const getNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return (
    <div className="relative flex justify-between">
      <Header />
      {/* <div>
        <ul className="text-black  flex flex-row w-screen m-auto mt-10 ml-10 mr-10 z-11 justify-around">
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </div> */}
      <div className="absolute right-20 top-6 flex justify-between ">
        <img className=" w-10 z-10" src={USER_AVATAR} alt="icon" />

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
