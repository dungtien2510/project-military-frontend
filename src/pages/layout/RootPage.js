import { Outlet } from "react-router";
import Header from "../../components/header/Header";

import style from "./RootPage.module.css";
function RootPage() {
  return (
    <>
      <Header />

      <main className={style.background}>
        <Outlet />
      </main>
    </>
  );
}
export default RootPage;
