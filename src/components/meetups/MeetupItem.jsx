import React from "react";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  const toggleFavoriteStatushandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };

  return (
    <div className="border-1 shadow-lg m-3 card text-center">
      <h3 className="mt-3 font-bold text-1xl "> {props.title} </h3>
      <div className="h-80 w-80">
        <img src={props.image} alt={props.title} className="mt-3" />
      </div>
      <div className="w-100">
        <address className="mt-3"> {props.address} </address>
        <p className="mt-3 items-center "> {props.description} </p>
      </div>
      <div className="m-3">
        <button
          className="btn btn-outline-secondary"
          onClick={toggleFavoriteStatushandler}
        >
          {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MeetupItem;
