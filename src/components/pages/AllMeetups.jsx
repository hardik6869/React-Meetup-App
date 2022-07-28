import React, { useEffect, useState } from "react";
import MeetupsList from "../meetups/MeetupsList";

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-meetup-5c2cf-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }
  console.log(loadedMeetups);
  return (
    <section className="md:container md:mx-auto flex justify-center item-center">
      <MeetupsList meetup={loadedMeetups} />
    </section>
  );
};

export default AllMeetups;
