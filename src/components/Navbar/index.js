import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav id="main-navigation">
      <Link to="/">Home</Link>
      <Link to="/create-page">Create Page</Link>
      <Link to="/list-pages">List Pages</Link>
    </nav>
  );
};

export default Navbar;
