import { Route, Routes } from "react-router-dom";
import AllMeetups from "./components/pages/AllMeetups";
import NewMeetup from "./components/pages/NewMeetup";
import Favorites from "./components/pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <>
      <MainNavigation />
      <Routes>
        <Route path="/" exact element={<AllMeetups />} />
        <Route path="/new-meetup" element={<NewMeetup />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
