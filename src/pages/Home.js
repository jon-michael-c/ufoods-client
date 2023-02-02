import React from "react";
import Banner from "../components/Banner";
import ReactLoading from "react-loading";
import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import Axios from "axios";
import { getRecipes } from "../api/recipesAPI";

export default function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  

  useEffect(() => {
    console.log(process.env);
    console.log(process.env.REACT_APP_API_URL);
    const API_URL = process.env.REACT_APP_API_URL;

     Axios.get(`${API_URL}/recipes/getRecipes`).then((resp) => {
      setData(resp.data);
      console.log(resp.data);
      setLoading(false);
    }); 
  }, []);

  return (
    <div>
      <Banner />
      <div className="content">
        <h1 className="sect-head">Recommended Picks</h1>
        <hr />
        <div className="userDisplay">
          {loading ? (
            <ReactLoading
              id="bubble-load"
              type="bubbles"
              color="#e85d04"
              height={100}
              width={100}
            />
          ) : (
            data.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe._id}
                  id={recipe._id}
                  name={recipe.name}
                  likes={recipe.likes}
                  dislikes={recipe.dislikes}
                  stars={recipe.stars}
                  imgURL={recipe.imageURL}
                  timers={recipe.timers}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
