import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/recipes/`,
});

export const getRecipes = async (setData) => {
  
  const data = await api.get("/getRecipes").data;
  setData(data)

}
