import { useReducer} from "react";
import restaurantImgA from "../images/restaurant.jpg"
import restaurantImgB from "../images/restaurantB.jpg"
const BookingForm = ({ availableTimes, timeDispatch , submitForm }) => {
  
  const initialState = {
    date: "",
    time: "",
    guests: "",
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
    <div className="form_container">
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
        <div className="input_container">
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
          <div className="multi_input_container">
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              name="guests"
              placeholder="1-10"
              min={1}
              max={10}
              value={state.guests}
              onChange={(e) => {
                const value = e.target.value === '' ? '' : Number(e.target.value);
                // If the value is within the range 1-10, update the state
                if (value === '' || (value >= 1 && value <= 10)) {
                  dispatch({ type: 'SET_GUESTS', payload: value });
                }
                }}
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
              <option>Select Occasion</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Birthday">Birthday</option>
            </select>
          </div>
          <button type="submit">
              Make Your reservation
          </button>
        </div>
      </form>
    </div>

  );
};

export default BookingForm;
