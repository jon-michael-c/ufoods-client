import { useEffect, useState } from "react";
import "./index.css";

export default function QuickFacts(props) {
  const [time, setTime] = useState(0);
  const [numIngr, setNumIngr] = useState(0);
  const [serves, setServes] = useState(1);

  const getTotal = () => {
    let count = 0;
    for (let item of props.data.timers) {
      console.log(item);
      count += item;
    }

    return count;
  };

  useEffect(() => {
    setTime(getTotal());
    setNumIngr(props.data.ingredients.length);
    if (props.data.serves) {
      setServes(props.data.serves);
    }
  }, []);
  return (
    <div className="quick-facts">
      <div className="fact-cont">
        <div className="fact">
          <h2>{time}</h2>
          <p>Minutes</p>
        </div>
        <div className="vl"></div>
        <div className="fact">
          <h2>{numIngr}</h2>
          <p>Ingredients</p>
        </div>
        <div className="vl"></div>
        <div className="fact">
          <h2>{serves}</h2>
          <p>Servings</p>
        </div>
      </div>
    </div>
  );
}
