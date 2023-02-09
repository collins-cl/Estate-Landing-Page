import React, { useEffect, useState } from "react";
import css from "../Hero/Hero.module.css";
import DisplayImage from "../../assets/build1.jpg";
import Option1 from "../../assets/option1.png";
import { HiHome } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { CgChevronDown } from "react-icons/cg";
import Ratings from "../Ratings/Ratings";
import DummyHomes from "../Dummies/Dummyhomes";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [state, setState] = useState("");

  const DummyData = DummyHomes;

  const filteredLocation = DummyData.filter((el) => {
    if (location === "") {
      return;
    } else {
      return el.location.city.toLowerCase().includes(location);
    }
  });

  const filteredState = DummyData.filter((el) => {
    if (state === "") {
      return;
    } else {
      return el.location.state.toLowerCase().includes(state);
    }
  });

  useEffect(() => {
    filteredLocation;
  }, [location, DummyData]);

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

          <p className={css.details}>
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
                  <input
                    type="search"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </p>

                <div>
                  {filteredLocation &&
                    filteredLocation.map((data) => (
                      <div className={css.loc_data} key={data.id}>
                        {data.location.city}
                      </div>
                    ))}
                </div>

                {/* <p className={css.selected}>Yogyakarta</p> */}
              </div>
            </div>

            <div className={css.box1}>
              <div className={css.icon_outline}>
                <HiHome color="#1FAB71" className={css.icon} />
              </div>

              <div className={css.categories}>
                <p>
                  <input type="search" name="" placeholder="State" />
                </p>

                {/* <p className={css.selected}>Industrial Home</p> */}
              </div>
            </div>

            <div className={css.search}>Search</div>
          </div>

          <div className={css.desktop_rating}>
            <Ratings />
          </div>
        </div>
      </div>

      <div className={css.mobile_rating}>
        <Ratings />
      </div>
    </div>
  );
};

export default Hero;
