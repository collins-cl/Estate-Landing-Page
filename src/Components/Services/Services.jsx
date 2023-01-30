import React from "react";
import css from "../Services/Services.module.css";
import Star from "../../assets/hello.svg";
import Image from "../../assets/build1.jpg";

const Services = () => {
  return (
    <div className={css.services}>
      <div className={css.services_wrapper}>
        <div className={css.box1}>
          <img src={Image} width={400} height={450} alt="left-image" />
        </div>
        <div className={css.box2}>
          <div className={css.heading}>Our Services</div>

          <h2>We make your comfort our top priority.</h2>

          <p>
            In a free hour, when our power of choice is untrammelled and when
            nothing prevents our being able to do what we like best.
          </p>

          <div className={css.utilities}>
            <div>
              <img src={Star} alt="star" /> Best market
            </div>

            <div>
              <img src={Star} alt="star" /> Unstable prices
            </div>

            <div>
              <img src={Star} alt="star" /> Top sells
            </div>

            <div>
              <img src={Star} alt="star" /> Security of data
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
