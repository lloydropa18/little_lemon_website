import "./App.css";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import OrderPage from "./pages/Orderpage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

function App() {
  // const [availableTimes, setAvailableTimes] = useState([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = (s * a) % m) / m;
    };
  };

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ":00");
      }
      if (random() < 0.5) {
        result.push(i + ":30");
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };
  const initializeTimes = { availableTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);
  function updateTimes(state, date) {
    return { availableTimes: fetchAPI(new Date(date)) };
  }

  const navigate = useNavigate();
  function submitForm(formData) {
    if (submitAPI(formData)) {
      navigate("/orderpage");
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route
          path="/bookingpage"
          element={
            <BookingPage
              availableTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/orderpage" element={<OrderPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
