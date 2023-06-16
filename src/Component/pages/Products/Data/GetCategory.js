import { NavLink } from "react-router-dom";
import cls from "../Products.module.css";
import Viewport from "../../../../hook/viewport";
const Category = ({ data, onClose }) => {
  const { phoneViewport } = Viewport();
  return (
    <ul className={cls.categoryContainer}>
      {data.map((item) => (
        <li key={item}>
          <NavLink key={item} to={`category/${item}`}>
            {item}
          </NavLink>
        </li>
      ))}
      {phoneViewport && (
        <li key={"close"}>
          <button onClick={onClose}>Close</button>
        </li>
      )}
    </ul>
  );
};
export default Category;
