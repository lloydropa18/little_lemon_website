import Navigation from "./Navigation";
import logoIcon from "../images/Logo.svg";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logoIcon} alt="logo of the Little Lemon Website" />
      </div>

      {/* Navigation links */}
      <Navigation />
      {/* if the device is in mobile, hamburger icon will show and the navigation will be hidden, it will be show when hamburger is toggle */}
    </header>
  );
};

export default Header;
