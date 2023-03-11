import React, { useEffect, useState } from "react";
import css from "../Hero/Hero.module.css";
import DisplayImage from "../../assets/build1.jpg";
import Option1 from "../../assets/option1.png";
import { HiHome } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";
import { CgChevronDown } from "react-icons/cg";
import Ratings from "../Ratings/Ratings";
import DummyHomes from "../Dummies/Dummyhomes";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router-dom";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Hero = () => {
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState(false);
  const [location, setLocation] = useState("None");
  const [type, setType] = useState("None");

  const DummyData = DummyHomes;

  const states = { type, location };

  const submitSearchParams = (location, type) => {
    if (location === "None") {
      alert(`Location is empty`);
    } else {
      if (type === "None") {
        alert("Category is empty");
      } else {
        console.log(states);
        setIsloading(true);
        setTimeout(() => {
          setIsloading(false);
          navigate(`/result/${location}/${type}`);
        }, 2500);
      }
    }
  };

  return (
    <div className={css.hero}>
      {isLoading && <Loading />}
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
            <form action="">
              <div className={css.box1}>
                <div className={css.icon_outline}>
                  <MdLocationOn color="#1FAB71" className={css.icon} />
                </div>

                <div className={css.categories}>
                  <p>
                    Location <CgChevronDown />
                  </p>

                  <FormControl sx={{ minWidth: "100%", mt: 1 }}>
                    <Select
                      value={location}
                      autoWidth
                      onChange={(e) => setLocation(e.target.value)}
                      id={css.select}
                      IconComponent={null}
                    >
                      <MenuItem value="None">None</MenuItem>
                      {DummyData.map((data) => (
                        <MenuItem
                          id={css.menuitem}
                          key={data.id}
                          value={data.location.city}
                        >
                          {data.location.city}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div className={css.box1}>
                <div className={css.icon_outline}>
                  <HiHome color="#1FAB71" className={css.icon} />
                </div>

                <div className={css.categories}>
                  <p>
                    Category <CgChevronDown />
                  </p>

                  <FormControl sx={{ minWidth: "100%", mt: 1 }}>
                    <Select
                      value={type}
                      autoWidth
                      onChange={(e) => setType(e.target.value)}
                      id={css.select}
                      IconComponent={null}
                    >
                      <MenuItem value="None">None</MenuItem>
                      {DummyData.map((data) => (
                        <MenuItem
                          id={css.menuitem}
                          key={data.id}
                          value={data.category}
                        >
                          {data.category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
              </div>

              <div
                className={css.search}
                onClick={() => submitSearchParams(location, type)}
              >
                Search
              </div>
            </form>
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
