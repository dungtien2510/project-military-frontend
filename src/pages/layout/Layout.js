import { Outlet, redirect, useNavigate } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar";
import style from "./Layout.module.css";
import { getToken } from "../../util/token";
function Layout() {
  const token = getToken();
  const navigate = useNavigate();
  if (!token) {
    alert("Vui lòng đăng nhập!");
    navigate("/auth?mode=login");
    return null;
  }
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
