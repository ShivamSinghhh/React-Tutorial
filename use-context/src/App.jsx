import "./App.css";
import { ThemeContext } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";
import Navbar from "./components/Navbar";
function App() {
  // step - 3 Consuming or using the Context
  const { theme, toggleTheme } = useContext(ThemeContext);
  const {isAuth} = useContext(AuthContext);

  return (
    <div className={`App ${theme==="dark" ? "dark" : "light"}`}>
      <Navbar/>
      <h1>Use-Context</h1>
      <p>
        Theme is <b>{theme}</b>
      </p>
      <button disabled={!isAuth} onClick={toggleTheme}>Toggle-Theme</button>
    </div>
  );
}

export default App;
