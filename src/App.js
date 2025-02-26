import "./App.css";
import Homepage from "./pages/Homepage";
import BookingPage from "./pages/BookingPage";
import OrderPage from "./pages/Orderpage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/bookingpage" element={<BookingPage />}></Route>
        <Route path="/orderpage" element={<OrderPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
