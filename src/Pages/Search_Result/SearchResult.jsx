import React from "react";
import { useParams } from "react-router-dom";
import css from "../Search_Result/SearchResult.module.css";
import image from "../../assets/build1.jpg";
import Footer from "../../Components/Footer/Footer";
import DummyHomes from "../../Components/Dummies/Dummyhomes";
import { useEffect } from "react";

const SearchResult = () => {
  const { location, type } = useParams();

  const data = DummyHomes;

  const filteredData = DummyHomes.filter((el) => {
    if (el.category !== type) {
      return;
    } else {
      return el.category;
    }
  });

  useEffect(() => {
    console.log(filteredData);
  }, []);

  return (
    <>
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
            {filteredData &&
              filteredData.map((item) => (
                <div className={css.wrapper} key={item.id}>
                  <div className={css.image_box}>
                    <img src={item.image} alt="" />
                  </div>
                  <div className={css.description}>
                    <div className={css.header}>
                      <p>{item.category}</p>
                      <div>{item.location.city}</div>
                    </div>

                    <div className={css.desc}>{item.description}</div>

                    <div className={css.reactions}>
                      <p>Perfect for you, if you like</p>
                      <div className={css.reactions_emojis}>
                        {item.reactions.map((el, id) => (
                          <p key={id}>{el.reaction}</p>
                        ))}
                      </div>
                    </div>

                    <div className={css.book_now}>Book now</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchResult;
