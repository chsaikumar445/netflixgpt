import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 ">
      <Link to={"/"}>
        <img className="w-48 ml-20" src={LOGO} alt="img1" />
      </Link>
    </div>
  );
};

export default Header;
