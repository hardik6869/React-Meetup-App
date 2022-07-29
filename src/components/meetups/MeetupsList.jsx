import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupsList = (props) => {
  return (
    <div>
      <div className="grid grid-col-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 ">
        {props.meetup.map((meetup) => (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            image={meetup.image}
            title={meetup.title}
            address={meetup.address}
            description={meetup.description}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetupsList;
