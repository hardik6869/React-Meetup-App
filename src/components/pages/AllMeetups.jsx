import React from "react";
import MeetupsList from "../meetups/MeetupsList";

const MEETUP_DATA = [
  {
    id: "1",
    title: "This is first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBQQfBzEsqTN91MHwdukq0yaBxWIcn5RjUw&usqp=CAU",
    address: "meetupstreet 5, 1234565 meetup city",
    description:
      "This is first, amazing meetup which you definitely should not miss ",
  },
  {
    id: "2",
    title: "This is first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnZIKelxCg9Y2-fjyU42vBP_jBRLuDJukaaA&usqp=CAU  ",
    address: "meetupstreet 2, 4565789 meetup city",
    description:
      "This is first, amazing meetup which you definitely should not miss ",
  },
];

const AllMeetups = () => {
  return (
    <section className="md:container md:mx-auto flex justify-center item-center">
      <MeetupsList meetup={MEETUP_DATA} />
    </section>
  );
};

export default AllMeetups;
