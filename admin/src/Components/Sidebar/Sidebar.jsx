import "./Sidebar.css";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaListAlt } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <SlBasket />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <FaListAlt />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}
