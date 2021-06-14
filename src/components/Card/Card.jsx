import React from "react";
import "./Card.css";
// import beer from "../../Data/beer";

const Card = (props) => {
  const cardList = props.list;
  return (
    <div className="beerContainer">
      {cardList.map((card) => {
        return (
          <div className="cardFront">
            <img className="image" src={card.image_url}></img>
            <h2>{card.name}</h2>
            <h3>{card.id}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
