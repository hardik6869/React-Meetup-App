import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const NewMeetupForm = () => {
  const navigate = useNavigate();
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const addMeetupHandler = (meetupData) => {
    fetch(
      "https://react-meetup-5c2cf-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    ).then(() => {
      navigate("/");
    });
  };

  const AddMeetup = (e) => {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    addMeetupHandler(meetupData);
  };

  return (
    <div className="container flex justify-center mt-5">
      <div className="card col-md-5 item-center p-4 shadow-lg">
        <form className="font-weight-bold" onSubmit={AddMeetup}>
          <div className="form-group">
            <label> Meetup Title</label>
            <input
              type="text"
              id="title"
              className="form-control"
              ref={titleInputRef}
              required
            />
          </div>
          <div className="form-group">
            <label> Meetup Image</label>
            <input
              type="url"
              id="image"
              className="form-control"
              ref={imageInputRef}
              required
            />
          </div>
          <div className="form-group">
            <label> Meetup Address</label>
            <input
              type="text"
              id="address"
              className="form-control"
              ref={addressInputRef}
              required
            />
          </div>
          <div className="form-group">
            <label> Meetup Description</label>
            <textarea
              id="description"
              className="form-control"
              ref={descriptionInputRef}
              rows={5}
              required
            />
          </div>
          <div>
            <button className="btn btn-outline-secondary"> Add Meetup </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewMeetupForm;
