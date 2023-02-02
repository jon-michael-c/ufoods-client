import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Interactions(props) {
  const params = useParams();
  const [isLike, setIsLike] = useState(false);
  const [isDislike, setisDislike] = useState(false);
  const [isStar, setIsStar] = useState(false);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [stars, setStars] = useState(0);
  const [user, setUser] = useState("");
  const [isLogin, setIsLogin] = useState(false)
  
  
  
  const removeAddLike = () => {
    axios.patch(`${process.env.REACT_APP_API_URL}/recipes/likePost/${params.id}`, {
        userId: props.userId
    })
  }

  const handleLike =  () => {
    if (isLike) {
      // Remove like from DB
      removeAddLike();
      setIsLike(false);
      setLikes(likes - 1);
    } else {
      if (isDislike) {
        // Remove dislike in DB
        setisDislike(false);
        setDislikes(dislikes - 1);
      }
      // Add like to the DB
      removeAddLike()
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
    if(props.userId != "") {
      setIsLogin(true)
    }
    setLikes(Object.keys(props.details.likes).length);
    setDislikes(Object.keys(props.details.dislikes).length);
    setStars(Object.keys(props.details.stars).length);
    setIsLike(props.userId in props.details.likes);
    setisDislike(props.userId in props.details.dislikes);
    setIsStar(props.userId in props.details.stars);
  }, []);
  return (
    <>
      <div className="stats" style={{pointerEvents: `${isLogin ? 'initial' : 'none'}`}}>
        <button className="likes stat-item" 
              onClick={handleLike}>
          {isLike ? (
            <i
              className="fas fa-thumbs-up"
              id="thumbs-up-icon"
            ></i>
          ) : (
            <i
              className="far fa-thumbs-up"
              id="thumbs-up-icon"
            ></i>
          )}
          <p>{likes}</p>
        </button>
        <button className="dislikes stat-item">
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
        </button>
        <button className="star stat-item">
          {isStar ? (
            <i className="fas fa-star" id="star-icon" onClick={handleStar}></i>
          ) : (
            <i className="far fa-star" id="star-icon" onClick={handleStar}></i>
          )}
          <p>{stars}</p>
        </button>
      </div>
    </>
  );
}
