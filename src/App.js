import "./styles/index.css";

import Navbar from "./components/Navbar";
import { Routes, Routers, BrowserRouter, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Results from "./pages/Results";

function App() {
  /*
  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name,
      age,
      username,
    }).then((resp) => {
      setUserList([
        ...userList,
        {
          name,
          age,
          username,
        },
      ]);
    });
  };
  */

  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
