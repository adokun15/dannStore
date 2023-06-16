import Viewport from "../../../hook/viewport";
import cls from "./Fourth.module.css";
const FourthSection = () => {
  const reviews = [
    {
      id: 1,
      name: "David Alan",
      img: "",
      comment: "Best Store!",
    },
    {
      id: 2,
      name: "George CaperMan",
      img: "",
      comment: "Best Quality",
    },
    {
      id: 3,
      name: "Gift Davies",
      img: "",
      comment: "Best Online Service",
    },
  ];

  const { phoneViewport, laptopViewPort } = Viewport();
  const classes = laptopViewPort ? cls.fourth__section__animation : "";
  const viewport = phoneViewport
    ? `${cls.fourth__section} ${cls.fourth__section__mobile}`
    : `${cls.fourth__section}`;
  return (
    <section className={viewport}>
      <h1>Reviews</h1>

      <div className={cls.fourth__section__container}>
        <div className={classes}>
          {reviews.map((review) => (
            <div className={cls.review} key={review.id}>
              <div className={cls.review__name}>{review.name}</div>
              <div className={cls.review__comment}>
                <span className={cls.review__style}>*</span>
                {review.comment}
                <span className={cls.review__style}>*</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FourthSection;
