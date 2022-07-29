import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupsList from "../components/meetups/MeetupsList";
import { Link } from "react-router-dom";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = (
      <p className="text-red-500 text-1xl font-bold">
        You got no favorites yet. Start adding some ?
      </p>
    );
  } else {
    content = <MeetupsList meetup={favoritesCtx.favorites} />;
  }
  return (
    <div>
      <h1 className="text-center text-2xl font-bold text-gray-700 m-5">
        My Favorites
      </h1>
      <section className="md:container md:mx-auto flex justify-center item-center">
        {content}
      </section>
      <div className="text-center p-4">
        <Link
          to={"/"}
          className="text-center text-1xl font-bold hover:no-underline text-gray-500 m-5"
        >
          <i class="fa fa-solid fa-arrow-left"> Back to Home</i>
        </Link>
      </div>
    </div>
  );
};

export default Favorites;
