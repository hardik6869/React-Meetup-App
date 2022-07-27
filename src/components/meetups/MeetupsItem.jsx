import React from "react";

const MeetupsItem = (props) => {
  return (
    <div className="border-1 shadow-lg m-3 card p-3 text-center">
      <h3 className="mt-3"> {props.title} </h3>

      <img src={props.image} alt={props.title} className="mt-3" />

      <address className="mt-3"> {props.address} </address>
      <p className="mt-3"> {props.description} </p>

      <button className="btn btn-outline-secondary mt-3 col-3 items-center">
        To Favorites
      </button>
    </div>
  );
};

export default MeetupsItem;
