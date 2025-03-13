import { useReducer} from "react";
import restaurantImgA from "../images/restaurant.jpg"
import restaurantImgB from "../images/restaurantB.jpg"
const BookingForm = ({ availableTimes, timeDispatch , submitForm }) => {
  
  const initialState = {
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case 'SET_DATE':
        return {...state, date : action.payload}
      case 'SET_TIME':
        return {...state, time: action.payload};
      case 'SET_GUESTS':
        return {...state, guests: action.payload};
      case 'SET_OCCASION':
        return {...state, occasion: action.payload};
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  function handleSubmit(e) {
    e.preventDefault()
    timeDispatch(state.date)
    submitForm(state)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="website_heading" data-test-id="heading">
        Little Lemon
      </h1>
      <h2 className="website_subheading">Chicago</h2>
      <h3>Find a table for any occasion</h3>
      <div className="form_images">
        <div className="form_image_left">
          <img src={restaurantImgA} alt="restaurant" />
        </div>
        <div className="form_image_right">
          <img src={restaurantImgB} alt="A second restaurant" />
        </div>
      </div>
      <div className="multi_input_container">
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="date"
          value={state.date}
          onChange={(e) => dispatch({type: 'SET_DATE', payload: e.target.value})}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          value={state.time}
          onChange={(e) => dispatch({type: 'SET_TIME', payload: e.target.value})}
          required
        >
          {availableTimes.availableTimes.map((time, index) => <option key={index}>{time}</option>)}
        </select>
      </div>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="text"
        placeholder="1"
        id="guests"
        name="guests"
        value={state.guests}
        onChange={(e) => dispatch({type: 'SET_GUESTS', payload: e.target.value})}
        required
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={state.occasion}
        onChange={(e) => dispatch({type: 'SET_OCCASION', payload: e.target.value})}
        required
      >
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <button type="submit">
        Make Your reservation
      </button>
    </form>

  );
};

export default BookingForm;
