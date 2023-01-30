import React from "react";
import { FaArrowRight, FaRegSquare } from "react-icons/fa";
import { MdLocationOn, MdBed } from "react-icons/md";
import { SiSquare } from "react-icons/si";
import { Link } from "react-router-dom";
import "../Auctions/Auctions.css";
import Build from "../../assets/build2.jpg";
import DummyData from "../Dummies/Dummyhomes";
// import BG from "../../assets/intersect.png";

const Auctions = () => {
  const data = DummyData;
  return (
    <div className="auctions">
      <div className="auctions-wrapper">
        <div className="head">Popular</div>

        <div className="heading">
          <p>Our Popular Residence</p>

          <Link to="" className="more">
            Explore More <FaArrowRight />
          </Link>
        </div>

        <div className="auction-boxes">
          {data &&
            data.slice(0, 3).map((item) => (
              <div className="box">
                <div className="img">
                  <img src={item.image} alt="" />
                </div>
                <div className="bottom">
                  <div className="location">
                    <MdLocationOn size={18} color="#1FAB71" />{" "}
                    <p>
                      {item.location.city}, {item.location.state}
                    </p>
                  </div>

                  <div className="details">
                    <div className="bed">
                      <MdBed size={15} /> <p>{item.bed} Bed</p>
                    </div>

                    <div className="size">
                      <FaRegSquare size={13} /> <p>{item.size} m</p>
                    </div>

                    <div className="sqft">
                      <SiSquare size={13} /> <p>{item.sqft} S</p>
                    </div>
                  </div>

                  <div className="book">
                    <Link to="" className="book-now">
                      Book Now
                    </Link>

                    <div className="price">${item.price}</div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="subtle-wallpaper">{/* <img src={BG} alt="" /> */}</div>
    </div>
  );
};

export default Auctions;
