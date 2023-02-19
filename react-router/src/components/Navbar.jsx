import { Link,NavLink } from "react-router-dom";
import "./Navbar.css"
export default function Navbar() {
  
  return (
    <nav className="nav-bar">
      {/* <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About Us</Link>
      <Link to={"/menu"}>Menu</Link>
      <Link to={"/contact"}>Contact Us</Link> */}

      {/* Its better to use NavLink instead of Link, because Navlink provides "active" className 
      for active link-element.  */}
      <NavLink  to={"/"}>Home</NavLink>
      <NavLink  to={"/about"}>About Us</NavLink>
      <NavLink  to={"/menu"}>Menu</NavLink>
      <NavLink  to={"/contact"}>Contact Us</NavLink>
      <NavLink  to={"/users"}>Users</NavLink>
      {/* No need of writing ClassName attribute here, "active" class will be automatical
     get applied to the activated NavLink. */}
    </nav>
  );
}
