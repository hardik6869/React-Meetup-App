import React from "react";

const DATA = [
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
    <section className="md:container md:mx-auto">
      <h1> All Meetups </h1>
      {DATA.map((meetup, index) => {
        return <li key={meetup.id}>{meetup.title}</li>;
      })}
    </section>
  );
};

export default AllMeetups;
