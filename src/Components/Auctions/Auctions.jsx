import React from "react";
import { FaArrowRight, FaRegSquare } from "react-icons/fa";
import { MdLocationOn, MdBed } from "react-icons/md";
import { SiSquare } from "react-icons/si";
import { Link } from "react-router-dom";
import "../Auctions/Auctions.css";
import Build from "../../assets/build2.jpg";
// import BG from "../../assets/intersect.png";

const Auctions = () => {
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
          <div className="box">
            <div className="img">
              <img src={Build} alt="" />
            </div>
            <div className="bottom">
              <div className="location">
                <MdLocationOn size={18} color="#1FAB71" /> <p>Jakarta, USA</p>
              </div>

              <div className="details">
                <div className="bed">
                  <MdBed size={15} /> <p>4 Bed</p>
                </div>

                <div className="size">
                  <FaRegSquare size={13} /> <p>10 X 10 m</p>
                </div>

                <div className="sqft">
                  <SiSquare size={13} /> <p>1000 S</p>
                </div>
              </div>

              <div className="book">
                <Link to="" className="book-now">
                  Book Now
                </Link>

                <div className="price">$5,200,200</div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <img src={Build} alt="" />
            </div>
            <div className="bottom">
              <div className="location">
                <MdLocationOn size={18} color="#1FAB71" /> <p>Jakarta, USA</p>
              </div>

              <div className="details">
                <div className="bed">
                  <MdBed size={15} /> <p>4 Bed</p>
                </div>

                <div className="size">
                  <FaRegSquare size={13} /> <p>10 X 10 m</p>
                </div>

                <div className="sqft">
                  <SiSquare size={13} /> <p>1000 S</p>
                </div>
              </div>

              <div className="book">
                <Link to="" className="book-now">
                  Book Now
                </Link>

                <div className="price">$5,200,200</div>
              </div>
            </div>
          </div>

          <div className="box">
            <div className="img">
              <img src={Build} alt="" />
            </div>
            <div className="bottom">
              <div className="location">
                <MdLocationOn size={18} color="#1FAB71" /> <p>Jakarta, USA</p>
              </div>

              <div className="details">
                <div className="bed">
                  <MdBed size={15} /> <p>4 Bed</p>
                </div>

                <div className="size">
                  <FaRegSquare size={13} /> <p>10 X 10 m</p>
                </div>

                <div className="sqft">
                  <SiSquare size={13} /> <p>1000 S</p>
                </div>
              </div>

              <div className="book">
                <Link to="" className="book-now">
                  Book Now
                </Link>

                <div className="price">$5,100,200</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="subtle-wallpaper">
        {/* <img src={BG} alt="" /> */}
      </div>
    </div>
  );
};

export default Auctions;
