import React from "react";
import css from "../Footer/Footer.module.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div className={css.foot_boxes}>
        <div className={css.f_box1}>
          <div className={css.head}>More Renty</div>
          <div className={css.links}>
            <Link to="/">FAQ</Link>
            <Link to="/">About Us</Link>
            <Link to="/">Contact Us</Link>
            <Link to="/">Feedback</Link>
            <Link to="/">Join Our Community</Link>
            <Link to="/">Agent Support</Link>
          </div>
        </div>

        <div className={css.f_box2}>
          <div className={css.head}>Stay Connected</div>

          <div className={css.newsletter}>
            Sign up for inspiration for nourishing your body, mind and shine
            from inside. Added bonus: you'll get 10% off your first Renty order.
          </div>

          <form action="">
            <input type="email" name="" required placeholder="Email Address" />
            <div className={css.button}>
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>
      </div>

      <div className={css.socials}>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaFacebookF />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="http://" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
      </div>

      <div className={css.info}>
        Renty Group is committed to ensuring digital accessibility for
        individuals with disabilities. We are continuously working to improve
        the accessibility of our web experience for everyone.
      </div>

      <div className={css.hr}></div>

      <div className={css.rights}>
        
      </div>
    </div>
  );
};

export default Footer;
