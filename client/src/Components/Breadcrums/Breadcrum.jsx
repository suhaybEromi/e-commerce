import "./Breadcrum.css";
import { FaArrowRight } from "react-icons/fa";

export default function Breadcrum(props) {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <FaArrowRight /> SHOP <FaArrowRight /> {product.category}
      <FaArrowRight /> {product.name}
    </div>
  );
}
