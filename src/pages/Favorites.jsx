import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupsList from "../components/meetups/MeetupsList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet. Start adding some ?</p>;
  } else {
    content = <MeetupsList meetup={favoritesCtx.favorites} />;
  }
  return (
    <section className="md:container md:mx-auto flex justify-center item-center">
      <h1> My Favorites </h1>
      {content}
    </section>
  );
};

export default Favorites;
