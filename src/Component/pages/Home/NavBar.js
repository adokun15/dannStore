import cls from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Viewport from "../../../hook/viewport";
const Nav = () => {
  const { laptopViewPort, toggle, phoneViewport, toggleHandler } = Viewport();
  const classes = phoneViewport
    ? `${cls.nav__laptop} ${cls.nav__phone}`
    : `${cls.nav__laptop}`;
  const navDirection = toggle ? "↓" : "←";
  return (
    <nav className={classes}>
      <h1>Dann Store</h1>
      <p></p>
      <ul>
        {laptopViewPort && (
          <>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? cls.activeLink : undefined
                }
                to="/"
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? cls.activeLink : undefined
                }
                to="/product"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? cls.activeLink : undefined
                }
                to="/cart"
              >
                Cart
              </NavLink>
            </li>
          </>
        )}
        {phoneViewport && (
          <li>
            <button className={cls.togglebtn} onClick={toggleHandler}>
              {navDirection}
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
