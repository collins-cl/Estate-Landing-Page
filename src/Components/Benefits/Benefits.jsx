import React from "react";
import css from "../Benefits/Benefits.module.css";
import One from "../../assets/v1.png";
import Two from "../../assets/v2.png";
import Three from "../../assets/v3.png";
import Four from "../../assets/v4.png";
import star from "../../assets/star.png";

const Benefits = () => {
  return (
    <div className={css.benefits}>
      <div className={css.wrapper}>
        <div className={css.details}>
          <div>Benefits</div>

          <h2>Why Choose Us</h2>

          <p>
            Renty is a trustworthy developer in the real estate business. He has
            developed a reputation for trust and will have that reputation for
            years to come.
          </p>

          <div>
            <p>
              <img src={One} alt="" /> Trusted Developer
            </p>
            <p>
              <img src={Two} alt="" /> No Commisions
            </p>
            <p>
              <img src={Three} alt="" /> A Safe and Trustworthy
            </p>
            <p>
              <img src={Four} alt="" /> Buy with Confidence
            </p>
          </div>
        </div>

        <div className={css.billboard}>
          <div>
            <div>
              <div>70+ Employee</div>
              <p>
                <img src={star} alt="" /> 4.9 <span>(6.4k reviews)</span>
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
