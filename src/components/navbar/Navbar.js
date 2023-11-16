import { NavLink, useNavigate } from "react-router-dom";
import style from "./Navbar.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const clickLogoutHandler = (e) => {
    dispatch(authActions.setLogout());
    navigate("/");
  };
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

        {
          <NavLink
            to="configuration"
            className={({ isActive }) =>
              isActive
                ? style["navbar-item"] + " " + style.active
                : style["navbar-item"]
            }
          >
            <img src="./icon/manager.png" width="30px" color="white" />
            <span>Cấu hình</span>
          </NavLink>
        }

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
        <button
          className={style["navbar-item-button"]}
          onClick={clickLogoutHandler}
        >
          <img src="./icon/logout.png" width="30px" color="white" />
          {/* <span>Đăng xuất</span> */}
        </button>
      </div>
    </nav>
  );
}
export default NavBar;
