import React from "react";
import { HomeData } from "../../types";
import './HomeItem.css'

interface Props {
  homeItem: HomeData;
}

const HomeItem: React.FC<Props> = ({ homeItem }) => {
  return (
      <div className="home__content grid">
        <div className="home__group">
          <img src={homeItem.img} alt="home__img" className="home__img" />
          <div className="home__indicator"></div>

          <div className="home__details-img">
            <h4 className="home__details-title">{homeItem.imgTitle}</h4>
            <span className="home__details-subtitle">{homeItem.imgSubtitle}</span>
          </div>
        </div>

        <div className="home__data">
          <h3 className="home__subtitle">{homeItem.subtitle}</h3>
          <h1 className="home__title">
            {homeItem.title[0]}
            <br />
            {homeItem.title[1]}
            <br />
            {homeItem.title[2]}
          </h1>
          <p className="home__description">{homeItem.description}</p>

          <div className="home__buttons">
            <a href="#" className="button">
              Book Now
            </a>
            <a href="#" className="button--link button--flex">
              Track Record
              <i className="bx bx-right-arrow-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
  );
};

export default HomeItem;