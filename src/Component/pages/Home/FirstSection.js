import Viewport from "../../../hook/viewport";
import cls from "./FirstSection.module.css";
const FirstSection = () => {
  const { phoneViewport } = Viewport();

  const classes = phoneViewport
    ? `${cls.descContainer_l} ${cls.descContainer_p}`
    : `${cls.descContainer_l}`;
  return (
    <section className={cls.first__section}>
      <div className={classes}>
        <h1>Your Store. Our Store</h1>
        <h3>Treat Yourself, Satisfy your Want, and Browse our Product</h3>
        <h3>and Select what fits you ;)</h3>
      </div>
    </section>
  );
};

export default FirstSection;
