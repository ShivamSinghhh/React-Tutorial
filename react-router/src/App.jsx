import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import About from "./Pages/AboutPage";
import ContactUs from "./Pages/ContactUsPage";
import Menu from "./Pages/MenuPage";
import Navbar from "./components/Navbar";
import UsersPage from "./Pages/UsersPage";
import { SingleUser } from "./components/SingleUser";
import { PageNotFound } from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>React-Router Tutorial</h2>
      <Routes>
        {/* Routes:- wrapper which wrap all the route components */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/users/:user_id" element={<SingleUser />} />
        {/* path = pathname or url
        element = component or page that we want to render */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
