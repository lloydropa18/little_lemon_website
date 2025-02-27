import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
const BookingPage = ({ availableTimes, dispatch }) => {
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </>
  );
};

export default BookingPage;
