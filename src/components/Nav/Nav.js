import { Link, NavLink, useLocation } from "react-router-dom";
import "./nav.css";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Nav() {
  const location = useLocation();

  const isLogin = location.pathname === "/login";

  const {theme, toggleTheme} = useContext(ThemeContext);
  const handleClick = () => toggleTheme();
  

  const navLinks = [
    {
      path: "/posts",
      name: "POSTY",
    },
    {
      path: "/dashboard",
      name: "DASHBOARD",
    },
    {
      path: "/login",
      name: "LOGIN",
    },
  ];

  const nacSttyle = {
    backgroundColor: theme === 'light' ? 'bisque' : 'darkgray',
    color: theme === 'light' ? 'black' : 'white',
  }

  return isLogin ? null : (
    <nav style={nacSttyle}>
      <span>LOGO</span>

      <div className="links">
        {navLinks.map((navLink) => (
          <NavLink
            key={navLink.path}
            to={navLink.path}
            className={({ isActive }) =>
              isActive ? "text-yellow font-bold" : "text-gray"
            }
          >
            {navLink.name}
          </NavLink>
        ))}

        <a href="https://wp.pl">WP.PL</a>
        <button onClick={handleClick}>Toggle Theme</button>
      </div>
    </nav>
  );
}

export default Nav;
