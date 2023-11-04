import { NavLink } from "react-router-dom";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <ul className={style.footerCol + " " + style.introFooter}>
        <li>
          <h4>Thông tin chung</h4>
        </li>
        <li>
          <p>
            Phần mềm quản lý là một công cụ hữu ích giúp các đơn vị trong quân
            đội quản lý và theo dõi các trang thiết bị, máy móc, và các quân
            nhân trong đơn vị mình.
          </p>
        </li>
      </ul>
      <ul className={style.footerCol}>
        <li>
          <h4>Thông tin liên hệ</h4>
        </li>
        <li>
          <h3>772233</h3>
        </li>
        <li>
          <p>Địa chỉ: 81, Duy tân, Quận Hải Châu, Đà Nẵng</p>
        </li>
        <li>
          <p>Email: dungtien2510@gmail.com</p>
        </li>
      </ul>
      <ul className={style.footerCol}>
        <li>
          <h4>Các trang chính </h4>
        </li>
        <li>
          <NavLink>Trang chủ</NavLink>
        </li>
        <li>
          <NavLink>quản lý quân nhân</NavLink>
        </li>
        <li>
          <NavLink>quản lý khí tài</NavLink>
        </li>
        <li>
          <NavLink>quản lý vũ khí</NavLink>
        </li>
      </ul>
      <ul className={style.footerCol}>
        <li>
          <h4>Hướng dẫn</h4>
        </li>
        <li>
          <NavLink>Trang chủ</NavLink>
        </li>
        <li>
          <NavLink>Giới thiệu</NavLink>
        </li>
        <li>
          <NavLink>Hướng dẫn sử dụng</NavLink>
        </li>
      </ul>
    </div>
  );
}
export default Footer;
