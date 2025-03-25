import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSlot from "../components/BookingSlot"
const Confirmationpage = ({form}) => {

  return (
    <>
      <Header />
      <BookingSlot form={form} />
      <Footer />
    </>
  );
};

export default Confirmationpage;
