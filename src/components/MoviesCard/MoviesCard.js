import React from "react";

import "./MoviesCard.css";

function MoviesCard() {
  return (
    <div>
      <li className="card">
        <img className="card__image" />
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">120</span>
          </div>
          <button type="button" className="card__delete-button"></button>
        </div>
      </li>

      <li className="card">
        <img className="card__image" />
        <div className="card__container">
          <div className="card__title-block">
            <h2 className="card__title">33 слова о дизайне</h2>
            <span className="card__time">120</span>
          </div>
          <button
            type="button"
            className="card__like-button card__like-button_active"
          ></button>
        </div>
      </li>
    </div>
  );
}

export default MoviesCard;