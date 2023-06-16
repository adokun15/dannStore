import cls from "./ThirdSection.module.css";
import imgItem from "../../../Imgs/kelly-sikkema-JDPDMaINjko-unsplash.jpg";
import { Link } from "react-router-dom";
import Viewport from "../../../hook/viewport";

const ThirdSection = () => {
  const topRatedItems = [
    { id: 1, name: "Some Item 1", price: 900 },
    { id: 2, name: "Some Item 2", price: 400 },
    { id: 3, name: "Some Item 3", price: 300 },
  ];

  const { phoneViewport, laptopViewPort } = Viewport();

  const classes = phoneViewport
    ? `${cls.third__section} ${cls.third__section_p}`
    : `${cls.third__section}`;
  return (
    <section className={classes}>
      <h1>Top Rated</h1>

      <div className={cls.third__section__container}>
        {topRatedItems.map((item) => (
          <Link to={"product"}>
            <div key={item.id} className={cls.third__section__item}>
              <div className={cls.imgCont}>
                <img src={imgItem} alt="iMAGE_2" />
              </div>

              <div className={cls.itemDescCont}>
                <p>{item.name}</p>
                <p>{item.price}</p>
                {laptopViewPort && <Link to={"/product"}>learn more</Link>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default ThirdSection;
