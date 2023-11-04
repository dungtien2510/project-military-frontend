import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
function Header() {
  return (
    <div className={style["header"]}>
      <h2>
        <NavLink className={style.home} to="/">
          <img src="./icon/management.png" width="40px" />
          <span>Phần mềm Quản lý</span>
        </NavLink>
      </h2>
      <div className={style["header-item"]}>
        <NavLink
          to={"/people"}
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          <img src="./icon/group.png" width="40px" />
          <span>Quân Nhân</span>
        </NavLink>
        <NavLink
          to={"/equipment"}
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          <img src="./icon/bullets.png" width="40px" />
          <span>Vũ khí, khí tài</span>
        </NavLink>
        {/* <NavLink
          to={"/equipment"}
          className={({ isActive }) => (isActive ? style.active : undefined)}
        >
          <img src="./icon/radio.png" width="40px" />
          <span>Khí tài</span>
        </NavLink> */}
      </div>
    </div>
  );
}
export default Header;
