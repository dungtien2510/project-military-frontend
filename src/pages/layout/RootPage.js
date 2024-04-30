import { Outlet } from "react-router";
import Header from "../../components/header/Header";
import LayoutVQ2 from "./layoutVQ2";
import style from "./RootPage.module.css";
function RootPage() {
  return (
    <LayoutVQ2>
      <Header />
      <main className={style.background}>
        <Outlet />
      </main>
    </LayoutVQ2>
  );
}
export default RootPage;
