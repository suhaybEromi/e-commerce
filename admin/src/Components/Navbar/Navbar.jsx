import "./Navbar.css";
import navlogo from "../../assets/logo.png";
import navProfile from "../../assets/nav-profile.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navlogo} className="nav-logo" />
      <img src={navProfile} className="nav-profile" />
    </div>
  );
}
