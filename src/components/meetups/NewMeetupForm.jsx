import React from "react";

const NewMeetupForm = () => {
  return (
    <div className="container flex justify-center mt-5">
      <div className="card col-md-5 item-center p-4 shadow-lg">
        <h1 className="text-2xl font-weight-bold  text-center">
          {" "}
          Add New Meetup
        </h1>
        <form>
          <div className="form-group">
            <label htmlFor> Meetup Title</label>
            <input type="text" id="title" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor> Meetup Image</label>
            <input type="url" id="image" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor> Meetup Address</label>
            <input type="text" id="address" className="form-control" required />
          </div>
          <div className="form-group">
            <label htmlFor> Meetup Description</label>
            <textarea
              id="description"
              className="form-control"
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
