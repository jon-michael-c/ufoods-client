import { useEffect, useState } from "react";

export default function Interactions(props) {
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setisDislike] = useState(false);
  const [isStar, setIsStar] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [stars, setStars] = useState(0);

  const handleLike = () => {
    if (isLike) {
      // Remove like from DB
      setIsLike(false);
      setLikes(likes - 1);
    } else {
      if (isDislike) {
        // Remove dislike in DB
        setisDislike(false);
        setDislikes(dislikes - 1);
      }
      // Add like to the DB
      setIsLike(true);
      setLikes(likes + 1);
    }
  };

  const handleDislike = () => {
    if (isDislike) {
      // Remove dislike from DB
      setisDislike(false);
      setDislikes(dislikes - 1);
    } else {
      if (isLike) {
        // Remove dislike in DB
        setIsLike(false);
        setLikes(likes - 1);
      }

      setisDislike(true);
      setDislikes(dislikes + 1);
    }
  };

  const handleStar = () => {
    if (isStar) {
      setIsStar(false);
      setStars(stars - 1);
    } else {
      setIsStar(true);
      setStars(stars + 1);
    }
  };

  useEffect(() => {
    setLikes(Object.keys(props.details.likes).length);
    setDislikes(Object.keys(props.details.dislikes).length);
    setStars(Object.keys(props.details.stars).length);
    setIsLike(props.user in props.details.likes);
    setisDislike(props.user in props.details.dislikes);
    setIsStar(props.user in props.details.stars);
  }, []);
  return (
    <>
      <div className="stats">
        <div className="likes stat-item">
          {isLike ? (
            <i
              className="fas fa-thumbs-up"
              id="thumbs-up-icon"
              onClick={handleLike}
            ></i>
          ) : (
            <i
              className="far fa-thumbs-up"
              id="thumbs-up-icon"
              onClick={handleLike}
            ></i>
          )}
          <p>{likes}</p>
        </div>
        <div className="dislikes stat-item">
          {isDislike ? (
            <i
              className="fas fa-thumbs-down"
              id="thumbs-down-icon"
              onClick={handleDislike}
            ></i>
          ) : (
            <i
              className="far fa-thumbs-down"
              id="thumbs-down-icon"
              onClick={handleDislike}
            ></i>
          )}
          <p>{dislikes}</p>
        </div>
        <div className="star stat-item">
          {isStar ? (
            <i className="fas fa-star" id="star-icon" onClick={handleStar}></i>
          ) : (
            <i className="far fa-star" id="star-icon" onClick={handleStar}></i>
          )}
          <p>{stars}</p>
        </div>
      </div>
    </>
  );
}
