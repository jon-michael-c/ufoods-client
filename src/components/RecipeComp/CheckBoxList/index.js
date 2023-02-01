import { Fraction } from "fractional";
import { useState } from "react";
import FontAwesome from "react-fontawesome";
import "./index.css";

export default function CheckBoxList(props) {
  const [quantity, setQuantity] = useState(1);
  const addQuant = () => {
    if (quantity < 50) {
      setQuantity(quantity + 1);
    }
  };

  const minusQuant = () => {
    if (quantity - 1 >= 1) {
      setQuantity(quantity - 1);
    }
  };

  const decToFrac = (dec) => {
    if (Number.isInteger(dec)) {
      return dec;
    } else {
      let tmp = Math.floor(dec) ? Math.floor(dec) : "";
      let fr = new Fraction(dec - tmp);
      return tmp + " " + fr.toString();
    }
  };

  const handleQChange = (e) => {
    e.preventDefault();
    if (e.target.value >= 1 && e.target.value <= 25) {
      setQuantity(e.target.value);
    }
  };

  const ingrLabel = (data) => {
    let split = data.quantity.split(" ");
    let num = "";
    let unit = "";
    let name = data.name;
    if (split.length == 1) {
      num = decToFrac(eval(split[0]) * quantity);
      unit = data.name;
      name = "";
    } else if (split.length == 2) {
      num = decToFrac(eval(split[0]) * quantity);
      unit = split[1];
    } else if (split.length == 3) {
      console.log(split);
      let tmp = split[0] + eval(split[1]);
      console.log(tmp);
      num = decToFrac(eval(tmp));
      unit = split[2];
    }
    if (!unit) unit = "";

    return num + " " + " " + unit + " " + name;
  };
  return (
    <div className="indgredients">
      <div className="ingr-header">
        <h3>Ingredients</h3>
        <div className="ingr-quant">
          {/*  <button className="btn" onClick={minusQuant}>
            <i className="fa fa-minus"></i>
  </button> */}
          <input
            className="quant-num"
            type="number"
            name="quantity"
            id="quantity"
            placeholder={quantity}
            onChange={handleQChange}
            min="1"
            max="25"
          ></input>
          {/*<button className="btn" onClick={addQuant}>
            <i className="fa fa-plus"></i>
          </button> */}
        </div>
      </div>
      <ul className="ingr-list">
        {props.ingredients.map((ingr, i) => {
          return (
            <li className="ingr-item">
              <input type="checkbox" id="ingr" name={i} value="ingr" />
              <label for={i} data-content={ingrLabel(ingr)}>
                {ingrLabel(ingr)}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
