import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingSlot from "../components/BookingSlot"
const Confirmationpage = ({form , setFormData}) => {

  return (
    <>
      <Header />
      <BookingSlot form={form} setFormData={setFormData}/>
      <Footer />
    </>
  );
};

export default Confirmationpage;
