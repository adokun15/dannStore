import cls from "./SecondSection.module.css";
import item1 from "../../../Imgs/kelly-sikkema-JDPDMaINjko-unsplash.jpg";
import item2 from "../../../Imgs/rishabh-malhotra-83ypHTv6J2M-unsplash.jpg";
import { Link } from "react-router-dom";
import Viewport from "../../../hook/viewport";
const SecondSection = () => {
  const { phoneViewport } = Viewport();
  const classes = phoneViewport
    ? `${cls.second__section__item} ${cls.second__section__item_mobile}`
    : `${cls.second__section__item}`;
  const html = (
    <section className={cls.second__section}>
      <div className={classes}>
        <div className={cls.imgCont}>
          <img src={item1} alt="iMAGE_1" />
        </div>
        <div className={cls.itemDescCont}>
          <p>Item 1</p>
          <a href="#123">learn more</a>
        </div>
      </div>

      <div className={classes}>
        <div className={cls.itemDescCont}>
          <p>Item 2</p>
          <Link to="product">learn more</Link>
        </div>
        <div className={cls.imgCont}>
          <img src={item2} alt="iMAGE_2" />
        </div>
      </div>
    </section>
  );

  return html;
};

export default SecondSection;
