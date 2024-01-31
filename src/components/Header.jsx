import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO, USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayname } = user;
        dispatch(addUser({ uid, email, displayname }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/login");
      }
    });
    return () => unsubscribed();
  }, []);

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
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 ">
      <Link to={"/"}>
        <img className="w-48 ml-20" src={LOGO} alt="img1" />
      </Link>
      {user && (
        <div className="absolute right-20 top-6 flex justify-between ">
          <img className=" w-10 z-10" src={USER_AVATAR} alt="icon" />

          <button
            onClick={handleSignOut}
            className="bg-red-600 pl-2 pr-2 ml-2 text-white z-10 rounded-md">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
