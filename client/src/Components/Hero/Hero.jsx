import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import { FaArrowRight } from "react-icons/fa";
import hero_image from "../assets/hero_image.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <FaArrowRight />
        </div>
      </div>

      <div className="hero-right">
        <img src={hero_image} width="600px" />
      </div>
    </div>
  );
}
