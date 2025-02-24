import logoIcon from "../images/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer_logo">
        <img src={logoIcon} alt="" />
      </div>
      <div className="footer_navigation">
        <h4>Doormat Navigation</h4>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#menu">Menu</a>
          </li>
          <li>
            <a href="#reservations">Reservations</a>
          </li>
          <li>
            <a href="#order_online">Order Online</a>
          </li>
          <li>
            <a href="#login">Login</a>
          </li>
        </ul>
      </div>
      <div className="footer_navigation">
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">phone number</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
        </ul>
      </div>
      <div className="footer_navigation">
        <h4>Social Media Link</h4>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">phone number</a>
          </li>
          <li>
            <a href="#">email</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
