import style from "./layoutVQ2.module.css";
import { NavLink } from "react-router-dom";

function LayoutVQ2() {
  // const token = getToken();

  return (
    <>
      <div className={style["header"]}>
        <h2>
          VQ2-M1
          {/* <NavLink className={style.home} to="/"> */}
          {/* <img src="./icon/management.png" width="40px" /> */}
          {/* <span>VQ2-M1</span> */}
          {/* </NavLink> */}
        </h2>
        <div className={style["header-item"]}>
          <>
            <NavLink
              to={"/equipment"}
              className={({ isActive }) =>
                isActive ? style.active : undefined
              }
            >
              <span>f372/thongtin372-TB thông tin</span>
              <img src="./icon/login-icon-01.svg" width="20px" />
            </NavLink>
          </>
        </div>
      </div>
      <div>
        <ul className={style.navbar}>
          <li>
            <NavLink>Quản lý thông tin</NavLink>
          </li>
          <li>
            <NavLink>Cảnh giới</NavLink>
          </li>
          <li>
            <NavLink>Tác chiến PK-KQ</NavLink>
          </li>
          <li>
            <NavLink>Dẫn đường</NavLink>
          </li>
          <li>
            <NavLink>Quản lý điều hành bay</NavLink>
          </li>
          <li>
            <NavLink>Quân huấn</NavLink>
          </li>
          <li>
            <NavLink>Quân báo</NavLink>
          </li>
          <li>
            <NavLink>Quản lý quân nhân</NavLink>
          </li>
          <li>
            <NavLink>Trao đổi thông tin</NavLink>
          </li>
          <li>
            <NavLink>Quản lý kết nối và giám sát</NavLink>
          </li>
          <li>
            <NavLink>Tái hiện dữ liệu và video</NavLink>
          </li>
          <li>
            <NavLink>Bản đồ 2D</NavLink>
          </li>
          <li>
            <NavLink>Huấn luyện</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
export default LayoutVQ2;
