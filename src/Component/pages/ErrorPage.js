//import errImg from "../../Imgs/signal_wifi_bad_FILL0_wght400_GRAD0_opsz48.png";
import Nav from "../pages/Home/NavBar";
import { useNavigate, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  const navigate = useNavigate();
  const goHome = () => {
    navigate("..");
  };
  return (
    <>
      <Nav />
      <div
        style={{
          textAlign: "center",
          width: "100%",
          margin: "auto",
          transform: "translateY(10rem)",
        }}
      >
        {/*<div>
          <img src={errImg} alt="bad wifi" />
      </div>*/}
        <p
          style={{
            margin: " 1rem 0",
            fontWeigth: "bold",
          }}
        >
          Something went Wrong
        </p>
        <button
          style={{
            padding: " 0.5rem 1rem ",
            background: "firebrick",
            color: "white",
            outline: "none",
            border: "none",
            borderRadius: "1rem",
            cursor: "pointer",
          }}
          onClick={goHome}
        >
          Go home
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
