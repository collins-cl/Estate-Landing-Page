import React from "react";
import css from "../Popular/Popular.module.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import build1 from "../../assets/build1.jpg";

const Popular = () => {
  return (
    <div className={css.popular}>
      <div className={css.wrapper}>
        <div className={css.heading}>Popular</div>
        <div className={css.popular_divide}>
          <div className={css.header}>Homes For Renty News And Stories</div>
          <div className={css.icons}>
            <AiOutlineLeft size={35} className={css.icon_1} />
            <AiOutlineRight size={35} className={css.icon_2} />
          </div>
        </div>
      </div>

      <div className={css.slides}>
        <div className={css.container}>
          <img width={250} src={build1} alt="" />
          <div>
            <h3>Editorial House</h3>
            <p>JL. Kencana oke. No2 universen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
