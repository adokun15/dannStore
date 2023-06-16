import imgLoader from "../../Imgs/autorenew_FILL0_wght400_GRAD0_opsz48.png";
import classes from "./LoaderIcon.module.css";
const Loader = ({ children, className }) => {
  const cls = `${classes.loaderContainer} ${className}`;
  return (
    <div className={cls}>
      <div className={classes.loader}>
        <img src={imgLoader} alt="a loader" />
      </div>
      <div className={classes.mes}>{children}</div>
    </div>
  );
};

export default Loader;
