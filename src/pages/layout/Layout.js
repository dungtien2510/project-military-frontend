import { Outlet } from "react-router";
import NavBar from "../../components/navbar/Navbar";
import style from "./Layout.module.css";
function Layout() {
  return (
    <>
      <NavBar />
      <main className={style.background}>
        <Outlet />
      </main>
    </>
  );
}
export default Layout;
