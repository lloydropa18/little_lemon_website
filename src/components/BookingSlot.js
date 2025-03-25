import { useNavigate} from "react-router-dom";
import { useState } from "react";

const BookingSlot = ({form}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    card: '',
    expMonth: '',
    expYear: '',
    cvv: ''
  })

  const navigate = useNavigate()

  function handleChange(e) {
    const {name, value} = e.target
    setFormData({
      ...form, 
      [name] : value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  console.log(form)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Reservation Details</h1>
          <h3>Date: {form.date}</h3>
          <h3>Time: {form.time}</h3>
          <h3>Guests: {form.guests} persons</h3>
          <h3>Occasion: {form.occasion}</h3>
        <h1>Personal Information</h1>
        <div>
          <label htmlFor="">First Name:
            <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">Last Name:
            <input 
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">Email:
            <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}/>
          </label>
        </div>

        <div>
          <h1>Credit Card Information</h1>

          <div>
            <label htmlFor="">Card Number
              <input 
              type="number" 
              name="card"
              value={formData.card}
              onChange={handleChange}
              maxLength={16}
              />
            </label>
          </div>

          <div className="multi_input_container_cvv">
          <div>
            <label htmlFor="expMonth">Expiration Date</label>
            <input 
              type="text" 
              name="expMonth" 
              placeholder="Month" 
              value={formData.expMonth} 
              onChange={handleChange}/>
            <input 
              type="number" 
              name="expYear" 
              placeholder="Year" 
              value={formData.expYear} 
              onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">CVV
              <input
              type="number"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              />
            </label>
          </div>
          </div>
        </div>
        <button type="submit">Confirm Reservation</button>
      </form>
    </div>
  );
};

export default BookingSlot;
