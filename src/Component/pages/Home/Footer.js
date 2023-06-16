import { Link } from "react-router-dom";
import cls from "./Footer.module.css";
import Viewport from "../../../hook/viewport";
const Footer = (prop) => {
  const classes = `${cls.footer} ${prop.newcls}`;
  const { phoneViewport } = Viewport();

  const info = phoneViewport ? `${classes} ${cls.footer_p}` : `${classes}`;
  return (
    <footer className={info}>
      <ul>
        <li>
          <Link to="/info?type=About">About</Link>
        </li>
        <li>
          <Link to="/info?type=Contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/info?type=Terms">Term & Policies</Link>
        </li>
      </ul>
      <p>&copy; Copyright by Daniel Amos</p>
    </footer>
  );
};
export default Footer;
