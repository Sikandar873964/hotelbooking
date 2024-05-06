import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Hotel Booking</span>
        </Link>
        {console.log("AAAAAAAAAAAAAAAAAAAAA=", user)}
        {user ? (
          <p style={{ color: "white", fontWeight: "bold" }}>
            Hi, {user.username}
            <button style={{ marginLeft: "10px" }} onClick={handleLogout}>
              Logout
            </button>
          </p>
        ) : (
          <div>
            {/* <button className="navButton">Register</button>
            <button className="navButton">Login</button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
