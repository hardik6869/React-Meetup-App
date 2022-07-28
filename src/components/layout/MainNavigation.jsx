import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <div className=" bg-gray-800 text-white">
      <nav className="flex justify-around text-2xl p-4 container ">
        <div> React Meetup</div>
        <ul className="flex space-x-28">
          <li>
            <Link to={"/"}> AllMeetups </Link>
          </li>
          <li>
            <Link to={"new-meetup"}> NewMeetup </Link>
          </li>
          <li>
            <Link to={"favorites"}>
              Favorite
              <sup className="text-sm bg-red-400 p-1 rounded-50">
                {favoriteCtx.totalFavorites}
              </sup>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
