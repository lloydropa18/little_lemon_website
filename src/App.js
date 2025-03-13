import "./App.css";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useReducer, useState} from "react";
import Confirmationpage from "./pages/Confirmationpage";

function App() {
  const [form, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "",
  })
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
  const submitAPI = function(data) {
    return true;
  };

  const initializeTimes = { availableTimes: fetchAPI(new Date()) };

  function updateTimes(date) {
    return {availableTimes: fetchAPI(new Date(date)) };
  }

  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  const navigate = useNavigate();

  function submitForm(data) {
    if (submitAPI(data)) {
      setFormData({
        ...form,
        ...data
      })
      navigate("/confirmationpage");
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
              timeDispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
        <Route path="/confirmationpage" element={<Confirmationpage form={form}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
