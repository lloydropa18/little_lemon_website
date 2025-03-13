import Header from "../components/Header";
import BookingForm from "../components/BookingForm";
const BookingPage = ({ availableTimes, timeDispatch, submitForm }) => {
  return (
    <>
      <Header />
      <BookingForm availableTimes={availableTimes} timeDispatch={timeDispatch} submitForm={submitForm}/>
    </>
  );
};

export default BookingPage;
