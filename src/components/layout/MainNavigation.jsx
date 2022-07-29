import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <div className=" bg-gray-800 text-white">
      <div className="container">
        <nav className="nav justify-around text-gray-300 text-1xl py-3">
          <Link to={"/"} className="text-white hover:no-underline text-2xl">
            React Meetup
          </Link>
          <ul className="flex space-x-5">
            <li>
              <Link to={"/"} className="hover:text-white">
                AllMeetups
              </Link>
            </li>
            <li>
              <Link to={"new-meetup"} className="hover:text-white">
                NewMeetup
              </Link>
            </li>
            <li>
              <Link to={"favorites"} className="hover:text-white">
                Favorites
                <sup className=" bg-red-400 p-0.5 px-1 rounded-circle">
                  {favoriteCtx.totalFavorites}
                </sup>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MainNavigation;
