import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  return (
    <section>
      <h1 className="text-center font-bold text-2xl text-gray-700 m-5">
        Add New Meetup
      </h1>
      <NewMeetupForm />
    </section>
  );
};

export default NewMeetup;
