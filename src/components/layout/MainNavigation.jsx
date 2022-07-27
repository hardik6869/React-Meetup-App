import React from "react";
import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <nav>
      <ul className="flex justify-around text-2xl p-4 bg-gray-800 text-white">
        <li>
          <Link to={"/"}> AllMeetups </Link>
        </li>
        <li>
          <Link to={"new-meetup"}> NewMeetups </Link>
        </li>
        <li>
          <Link to={"favorites"}> Favorite </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
