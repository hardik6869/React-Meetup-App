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
    <div className="border-1 shadow-lg m-3 card p-3 text-center">
      <h3 className="mt-3"> {props.title} </h3>

      <img src={props.image} alt={props.title} className="mt-3" />

      <address className="mt-3"> {props.address} </address>
      <p className="mt-3"> {props.description} </p>

      <button
        className="btn btn-outline-secondary mt-3 col-3 items-center"
        onClick={toggleFavoriteStatushandler}
      >
        {itemIsFavorite ? "Remove from Favorites" : "To Favorites"}
      </button>
    </div>
  );
};

export default MeetupItem;
