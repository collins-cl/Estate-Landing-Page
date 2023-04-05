import React from "react";
import css from "../Construction/Construction.module.css";
import Footer from "../../Components/Footer/Footer";
import ConstructionImage from "../../assets/construction.svg";
import { Link } from "react-router-dom";

const Construction = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <img src={ConstructionImage} alt="" />
        <p>
          O o p s !, This page is under construction. Please{" "}
          <Link to="/">navigate</Link> back to the homepage 🙂
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Construction;
