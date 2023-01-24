import React from "react";
import css from "../Ratings/Ratings.module.css";

const Ratings = () => {
  return (
    <div className={css.ratings}>
      <div className={css.box}>
        <div className={css.rate}>
          280<span>+</span>
        </div>

        <div className={css.title}>Google Review</div>
      </div>

      <div className={css.box}>
        <div className={css.rate}>
          15<span>+</span>
        </div>

        <div className={css.title}>Years Experience</div>
      </div>

      <div className={css.box}>
        <div className={css.rate}>
          49<span>+</span>
        </div>

        <div className={css.title}>Award Winning</div>
      </div>
    </div>
  );
};

export default Ratings;
