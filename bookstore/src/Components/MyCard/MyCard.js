import React from "react";
import "./MyCard.css";

function MyCard(props) {
  return (
    <div key={props.id} className="col-lg-3 col-md-6 mt-3 mb-4">
      <div className="card my-card bg-body-tertiary h-100 rounded-0 border-0">
        <img
          src={props.imageUrl}
          alt={props.title}
          className="card-img-top rounded-0"
        />
        <div className="card-body p-0 pt-1">
          {/* <p className="card-text m-1 opacity-50">{props.category}</p> */}
          <h5 className="card-title">{props.title}</h5>
          <span className="ms-1">{props.price}</span>
        </div>
      </div>
    </div>
  );
}

export default MyCard;
