import React from "react";
import css from "../Hero/Hero.module.css";
import DisplayImage from "../../assets/build1.jpg";
import Option1 from "../../assets/option1.png";
import { HiHome } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { CgChevronDown } from "react-icons/cg";

const Hero = () => {
  return (
    <div className={css.hero}>
      <div className={css.blurry_background}></div>

      <div className={css.container}>
        <div className={css.container_one}>
          <div className={css.wrapper}>
            <img width={400} height={550} src={DisplayImage} alt="" />
            <div className={css.options}>
              <img width={250} src={Option1} alt="" />
              <img width={250} src={Option1} alt="" />
              <img width={250} src={Option1} alt="" />
              <img width={250} src={Option1} alt="" />
              <img width={250} src={Option1} alt="" />
            </div>
          </div>
        </div>
        <div className={css.container_two}>
          <h2>Discover the ideal property here</h2>

          <p>
            As soon as I had found a few properties that suited me, I was able
            to forget about how difficult it was to find a suitable home.
          </p>

          <div className={css.search_params}>
            <div className={css.box1}>
              <div className={css.icon_outline}>
                <MdLocationOn color="#1FAB71" className={css.icon} />
              </div>

              <div className={css.categories}>
                <p>
                  Location <CgChevronDown />
                </p>

                <p className={css.selected}>Yogyakarta</p>
              </div>
            </div>

            <div className={css.box1}>
              <div className={css.icon_outline}>
                <HiHome color="#1FAB71" className={css.icon} />
              </div>

              <div className={css.categories}>
                <p>
                  Type <CgChevronDown />
                </p>

                <p className={css.selected}>Industrial Home</p>
              </div>
            </div>

            <div className={css.search}>Search</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
