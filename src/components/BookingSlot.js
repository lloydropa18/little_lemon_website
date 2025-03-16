

const BookingSlot = ({form, setFormData}) => {
  console.log(form)
  return (
    <div>
      <form action="">
        <h1>Reservation Details</h1>
          <h3>Date: {form.date}</h3>
          <h3>Time: {form.time}</h3>
          <h3>Guests: {form.guests} persons</h3>
          <h3>Occasion: {form.occasion}</h3>
        <h1>Personal Information</h1>
        <div>
          <label htmlFor="">First Name:
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">Last Name:
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="">Email:
            <input type="text" />
          </label>
        </div>

        <div>
          <h1>Credit Card Information</h1>

          <div>
            <label htmlFor="">Card Number
              <input type="number" />
            </label>
          </div>

          <div className="multi_input_container_cvv">
          <div>
            <label htmlFor="">Expiration Date</label>
            <input type="text" placeholder="Month"/>
            <input type="number" placeholder="Year"/>
          </div>
          <div>
            <label htmlFor="">CVV
              <input type="number"/>
            </label>
          </div>
          </div>
        </div>
        <button>Confirm Reservation</button>
      </form>
    </div>
  );
};

export default BookingSlot;
