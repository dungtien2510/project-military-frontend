import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { getToken } from "../../util/token";
import { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
function Header() {
  // const token = getToken();
  const { token } = useSelector((state) => state.auth);

  return (
    <div className={style["header"]}>
      <h2>
        <NavLink className={style.home} to="/">
          <img src="./icon/management.png" width="40px" />
          <span>Phần mềm Quản lý</span>
        </NavLink>
      </h2>
      <div className={style["header-item"]}>
        {token && (
          <>
            <NavLink
              to={"/people"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <img src="./icon/group.png" width="30px" />
              <span>Quân Nhân</span>
            </NavLink>
            <NavLink
              to={"/equipment"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <img src="./icon/bullets.png" width="30px" />
              <span>Vũ khí, khí tài</span>
            </NavLink>
          </>
        )}
        {!token && (
          <>
            <NavLink
              to={"/auth?mode=login"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <img src="./icon/login.png" width="30px" />
              <span>Đăng nhập</span>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
}
export default Header;
