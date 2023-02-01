import React from "react";
import "./index.css";
import breakfast from "../../images/breakfast.jpg";
import lunch from "../../images/lunch.jpg";

export default function Banner() {
  return (
    <div className="category-banner">
      <div className="banner-content">
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Breakfast</h3>
        </div>
        <div className="cat">
          <img src={lunch} alt="#" className="cat-img" />
          <h3>Lunch</h3>
        </div>
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Dinner</h3>
        </div>
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Snacks</h3>
        </div>
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Deserts</h3>
        </div>
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Vegan</h3>
        </div>
        <div className="cat">
          <img src={breakfast} alt="#" className="cat-img" />
          <h3>Vegetarian</h3>
        </div>
      </div>
    </div>
  );
}
