import React from "react";
import { useDispatch } from "react-redux";

const Secondartcontainer = () => {
  const title = useDispatch((store) => store.movies);
  return <div>Secondartcontainer</div>;
};

export default Secondartcontainer;
