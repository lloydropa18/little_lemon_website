import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
const BookingPage = ({ availableTimes, dispatch, submitForm }) => {
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    </>
  );
};

export default BookingPage;
