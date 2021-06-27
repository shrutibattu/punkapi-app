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
            <img className="image" src={card.image_url} alt=""></img>
            <h4 className="name">{card.name}</h4>
            <h5 className="id">{card.id}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
