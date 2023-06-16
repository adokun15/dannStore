import Nav from "./Home/NavBar";
import cls from "./Info.module.css";
import {
  //  useFetcher,
  //  Form,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { useRef, useState } from "react";
import Viewport from "../../hook/viewport";
//import { Form } from "react-router-dom";
const InfoPage = () => {
  const [query] = useSearchParams();
  //const fetcher = useFetcher();
  //const { data, state } = fetcher;
  const currentType = query.get("type");

  const Info = [
    {
      type: "About",
      header: "About Us",
      desc: "A description about the Store",
    },
    { type: "Contact", header: "Contact Us" },
    {
      type: "Terms",
      header: "Terms & Policies",
      desc: "A description about Term and Policies of the Store",
    },
  ];
  const currentInfo = Info.find((item) => item.type === currentType);

  const onFormInvalid =
    currentInfo.type === "About" || currentInfo.type === "Terms";
  const nav = useNavigate();

  const [mes, setMes] = useState("");
  const goHome = () => {
    nav("..");
  };

  const emailRef = useRef();
  const passwordRef = useRef();

  const mesFunction = (message = "") => {
    setMes(message);

    setTimeout(() => setMes(""), 2500);
  };
  const successFunction = (e) => {
    e.preventDefault();
    let email = emailRef.current;
    let password = passwordRef.current;

    if (email.value === "" || password.value === "") {
      mesFunction("Incomplete Inputs");
      return;
    }
    mesFunction("Success");
    email.value = "";

    password.value = "";
  };

  const { phoneViewport } = Viewport();

  const formClasses = phoneViewport
    ? `${cls.info__form} ${cls.info__form_p}`
    : `${cls.info__form}`;
  return (
    <main>
      <Nav />
      {onFormInvalid && (
        <article className={cls.info}>
          <h1 className={cls.info__header}>{currentInfo.header}</h1>
          <div className={cls.info__comment}>{currentInfo.desc}</div>
          <button className={cls.info__btn} onClick={goHome}>
            go home
          </button>
        </article>
      )}
      {!onFormInvalid && (
        <form onSubmit={successFunction} className={formClasses}>
          <h1>{currentInfo.header}</h1>
          <p>{mes}</p>
          <input ref={emailRef} type="email" placeholder="Enter Email" />
          <input ref={passwordRef} type="text" placeholder="Enter Message" />

          <button>Submit</button>
        </form>
      )}
    </main>
  );
};

export default InfoPage;
