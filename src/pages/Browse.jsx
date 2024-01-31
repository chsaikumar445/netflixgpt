import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { auth } from "../utils/firebase";

import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Maincontainer from "../components/Maincontainer";
import Secondartcontainer from "../components/Secondartcontainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="relative flex justify-between">
      <Header />
      <Maincontainer />
      <Secondartcontainer />
    </div>
  );
};

export default Browse;
