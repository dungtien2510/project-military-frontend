import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style["navbar-type"]}>
        <NavLink
          to="list"
          className={({ isActive }) =>
            isActive
              ? style["navbar-item"] + " " + style.active
              : style["navbar-item"]
          }
        >
          <img src="./icon/list.png" width="30px" color="white" />
          <span>Danh sách</span>
        </NavLink>

        <NavLink
          to="add"
          className={({ isActive }) =>
            isActive
              ? style["navbar-item"] + " " + style.active
              : style["navbar-item"]
          }
        >
          <img src="./icon/edit.png" width="30px" color="white" />
          <span>Thêm</span>
        </NavLink>
        <NavLink
          to="search"
          className={({ isActive }) =>
            isActive
              ? style["navbar-item"] + " " + style.active
              : style["navbar-item"]
          }
        >
          <img src="./icon/search.png" width="30px" color="white" />
          <span>Tìm kiếm</span>
        </NavLink>

        {<NavLink
          to="configuration"
          className={({ isActive }) =>
            isActive
              ? style["navbar-item"] + " " + style.active
              : style["navbar-item"]
          }
        >
          <img src="./icon/manager.png" width="30px" color="white" />
          <span>Cấu hình</span>
        </NavLink>}

        <NavLink
          to=""
          end
          className={({ isActive }) =>
            isActive
              ? style["navbar-item"] + " " + style.active
              : style["navbar-item"]
          }
        >
          <img src="./icon/type.png" width="30px" color="white" />
          <span>Giới thiệu</span>
        </NavLink>
      </div>
    </nav>
  );
}
export default NavBar;
