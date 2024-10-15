import { Outlet } from "react-router-dom";
import Headerr from "../components/common/header/Headerr";

const RootView = () => {
  return (
    <>
      <Headerr />
      <main className="container">
        <Outlet />
      </main>
      <footer>este es el footer</footer>
    </>
  );
};

export default RootView;
//npm i react-router-dom
