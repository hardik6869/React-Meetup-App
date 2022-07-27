import React from "react";
import MeetupsItem from "./MeetupsItem";

const MeetupsList = (props) => {
  return (
    <div>
      <h1> All Meetups</h1>
      {props.meetup.map((meetup) => (
        <MeetupsItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </div>
  );
};

export default MeetupsList;
