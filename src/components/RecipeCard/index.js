import React, { useEffect, useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "react-fontawesome";
import regular from "@fortawesome/fontawesome-svg-core";
import Recipe from "../../pages/Recipe";
const RecipeCard = (props) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [stars, setStars] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = `/recipe/${props.id}`;
  };
  const calcTime = (arr) => {
    let time = 0;
    for (let item of arr) {
      time += item;
    }

    return time;
  };

  useEffect(() => {
    if (props.likes) setLikes(Object.keys(props.likes).length);
    if (props.dislikes) setDislikes(Object.keys(props.dislikes).length);
    if (props.stars) setStars(Object.keys(props.stars).length);
  }, []);

  return (
    <div class="card-container" onClick={handleClick}>
      <div
        class="img-container"
        style={{ backgroundImage: `url(${props.imgURL})` }}
      ></div>
      <div className="prev">
        <div class="stats">
          <div class="star stat-item">
            <i className="far fa-star" id="star-icon"></i>
            <p>{stars}</p>
          </div>
          <div class="likes stat-item">
            <i class="far fa-thumbs-up" id="thumbs-up-icon"></i>
            <p>{Math.floor((likes / (likes + dislikes)) * 100)} %</p>
          </div>
        </div>
        <div class="header">
          <h2>{props.name}</h2>
        </div>
        <div class="desc">
          <p>
            An easy, fresh take on a favorite dish, packed with crunchy
            vegetables
          </p>
        </div>
        <div class="prep-time">
          <p>
            <i class="fas fa-clock" id="clock-icon"></i>{" "}
            {calcTime(props.timers)} Minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
