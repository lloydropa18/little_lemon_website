import { useState } from "react";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 0,
    occasion: null,
  });
  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(e);
  }

  return (
    <form>
      <h1 className="website_heading" data-test-id="heading">
        Little Lemon
      </h1>
      <h2 className="website_subheading">Chicago</h2>
      <h3>Find a table for any occasion</h3>
      <div className="form_images">
        <div className="form_image_left">
          <img src="" alt="" />
        </div>
        <div className="form_image_right">
          <img src="" alt="" />
        </div>
      </div>
      <div className="multi_input_container">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={formData.value}
          onChange={handleChange}
        >
          {availableTimes.availableTimes.map((time, index) => {
            return <option key={index}>{time}</option>;
          })}
        </select>
      </div>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={formData.value}
        onChange={handleChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.value}
        onChange={handleChange}
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        onSubmit={handleSubmit}
      />
    </form>
  );
};

export default BookingForm;
