import React from "react";
import { useParams } from "react-router-dom";
import css from "../Search_Result/SearchResult.module.css";
import image from "../../assets/build1.jpg";

const SearchResult = () => {
  const { location, type } = useParams();

  return (
    <div className={css.searchresult}>
      <div className={css.resultbox}>
        <div className={css.heading}>
          <div>12 Results</div>
          <div className={css.sort}>
            <p>Sort by</p>
            <div>Best Match ⌟</div>
          </div>
        </div>

        <div className={css.container}>
          <div className={css.wrapper}>
            <div className={css.image_box}>
              <img src={image} alt="" />
            </div>
            <div className={css.description}>
              <div className={css.header}>
                <p>Type</p>
                <div>Location</div>
              </div>

              <div className={css.desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                animi molestias ad et laboriosam delectus nam sapiente a velit.
                Perferendis labore reiciendis velit doloribus harum nihil
                debitis.
              </div>

              <div className={css.reactions}>
                <p>Perfect for you, if you like</p>
                <div className={css.reactions_emojis}>
                  <p>🪂 Beach Vacation</p>
                  <p>🪂 Beach Vacation</p>
                  <p>🪂 Beach Vacation</p>
                  <p>🪂 Beach Vacation</p>
                  <p>🪂 Beach Vacation</p>
                  <p>🪂 Beach Vacation</p>
                </div>
              </div>

              <div className={css.book_now}>Book now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
