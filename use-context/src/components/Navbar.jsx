import "./Navbar.css";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";

export default function Navbar() {
  const { isAuth, logIn, logOut } = useContext(AuthContext);
  const {theme} =useContext(ThemeContext);
  return (
    <div className={`nav-bar ${theme==="dark"? "dark":"light"}`}>
      <h4>Is User Authenticated :{isAuth ? "Yes" : "No"}</h4>
      <button disabled={isAuth} onClick={logIn}>
        LogIn
      </button>
      <button disabled={!isAuth} onClick={logOut}>
        LogOut
      </button>
    </div>
  );
}
