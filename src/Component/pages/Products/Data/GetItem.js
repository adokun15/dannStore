import { Link } from "react-router-dom";
import cls from "../Products.module.css";
const Items = ({ data }) => {
  console.log(data);

  return (
    <>
      {data &&
        data.map((item, i) => (
          <Link to={"/product/" + item.id} key={item.id}>
            <li key={item.id} className={cls.productItem}>
              <div className={cls.productItem__imgCont}>
                <img src={item.thumbnail} alt={item.brand} />
              </div>
              <p className={cls.productItem__price}>${item.price}</p>
              <p className={cls.productItem__title}>{item.title}</p>
            </li>
          </Link>
        ))}
    </>
  );
};
export default Items;
