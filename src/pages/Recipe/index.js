import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Axios from "axios";
import ReactLoading from "react-loading";
import "./index.css";
import CheckBoxList from "../../components/RecipeComp/CheckBoxList/index";
import QuickFacts from "../../components/RecipeComp/QuickFacts/index";
import { useAuthContext } from "../../hooks/useAuthContext";
import Interactions from "../../components/RecipeComp/Interactions";

export default function Recipe() {
  let params = useParams();
  const [details, setDetails] = useState([]);
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState(1);
  const { user } = useAuthContext();

  const fetchIsLiked = async () => {};

  const fetchDetails = async () => {
    const data = await Axios.get(
      `${process.env.REACT_APP_API_URL}/recipes/getRecipe/${params.id}`
    );
    const result = data.data;
    console.log(result);
    setDetails(result);
    document.title = result.name;
  };

  const handleLike = async () => {
    if (isLike) {
      setIsLike(false);
      setLikes(likes - 1);
    } else {
      setIsLike(true);
      setLikes(likes + 1);
    }
  };

  useEffect(() => {
    //console.log(params.id);
    fetchDetails();
    //fetchIsLiked();
    //console.log(user.email);

    document.title = "Loading...";
  }, [user, params]);

  return (
    <article className="recipe">
      {details.length === 0 ? (
        <ReactLoading
          id="bubble-load"
          type="bubbles"
          color="#e85d04"
          height={100}
          width={100}
        />
      ) : (
        <>
          <div
            className="rec-img-container"
            style={{ backgroundImage: `url(${details.imageURL})` }}
          ></div>
          <div className="rec-back">
            <div className="rec-main">
              <div className="rec-head-container">
                <div className="rec-title-container">
                  <h1 className="rec-title">{details.name}</h1>
                  <h3 className="rec-author">By Anon</h3>
                  <Interactions details={details} user={user} />
                  <QuickFacts data={details} />
                </div>
              </div>

              <div className="recipe-top">
                <CheckBoxList ingredients={details.ingredients} />
                <div className="step-sect">
                  <h3>Steps</h3>
                  <ul className="step-list">
                    {details.steps.map((step, index) => {
                      return (
                        <>
                          {" "}
                          <li className="step-item">
                            <span className="step-num">{index + 1}</span>
                            {step}
                          </li>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="next">
              <h2>See Next</h2>
            </div>
          </div>
        </>
      )}
    </article>
  );
}
