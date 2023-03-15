import React from "react";
import "./style.css";

export default function Card(props) {
  let badgetext;
  if (props.item.openSpots === 0) {
    badgetext = "Sold out";
  } else if (props.item.location === "Online") {
    badgetext = "Online";
  }

  return (
    <div className="card">
      {badgetext && <div className="card--badge">{badgetext}</div>}
      <img
        src={`images/${props.item.coverImg}`}
        alt="swimmer"
        className="card--images"
      />
      <div className="card--stats">
        <img src="images/star 1.png" alt="star" className="star" />
        <span> &nbsp; {props.item.stats.rating} </span>
        <span className="grey">&nbsp;({props.item.stats.reviewCount}).</span>
        <span className="grey">{props.item.country}</span>
      </div>
      <p className="cards--title">{props.item.title}</p>
      <p className="description">{props.item.description}</p>
      <p>
        <span className="boldard--price">
          <span className="bold">Frosm ${props.item.price} </span> /
        </span>
        <span> person</span>
      </p>
    </div>
  );
}
