import React from "react";
import NewMeetupForm from "../meetups/NewMeetupForm";

const NewMeetup = () => {
  const addMeetupHandler = (meetupData) => {};
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
