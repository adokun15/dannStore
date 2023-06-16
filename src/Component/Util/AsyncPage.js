import { Suspense } from "react";
import Loader from "../pages/LoaderIcon";
//import { Await } from "react-router-dom";
const AsyncPage = ({ children, className }) => {
  return (
    <Suspense fallback={<Loader className={className}>loading...</Loader>}>
      {children}
    </Suspense>
  );
};

export default AsyncPage;
