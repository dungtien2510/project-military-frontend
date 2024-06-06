import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import style from "./HeaderNew.module.css";
function HeaderNew() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const onSelectHandler = (a, b) => {
    return navigate(a);
  };
  return (
    <Nav
      variant="tabs"
      defaultActiveKey="/home"
      className={`dark position-fixed text-white bg-body-tertiary ${style.header}`}
      onSelect={onSelectHandler}
    >
      <Nav.Item className="px-3">
        <Nav.Link eventKey="/overview">Tổng quan</Nav.Link>
      </Nav.Item>
      <Nav.Item className="px-3">
        <NavDropdown title="Danh sách" id="nav-dropdown">
          <NavDropdown.Item eventKey="/military/list">
            Quân nhân
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="/relative/list">
            Người thân
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="/location/list">Đơn vị</NavDropdown.Item>

          <NavDropdown.Item eventKey="/reward/list">
            Khen thưởng, kỷ luật
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="px-3">
        <NavDropdown title="Cấu hình" id="nav-dropdown">
          <NavDropdown.Item eventKey="/location/configuration">
            Đơn vị
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="/position/configuration">
            Chức vụ
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="/reward/configuration">
            Khen thưởng, kỷ luật
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item className="px-3">
        <Nav.Link
          eventKey="4.5"
          className={({ isActive }) => (isActive ? "active" : undefined)}
          href="/equipment"
        >
          Giới thiệu
        </Nav.Link>
      </Nav.Item>
      {!token && (
        <>
          <NavLink to={"/auth?mode=login"} className="">
            <img src="./icon/login.png" width="30px" />
            <span>Đăng nhập</span>
          </NavLink>
        </>
      )}
      {token && (
        <Button variant="outline-success" className="ml-auto p-2">
          Đăng xuất
        </Button>
      )}
    </Nav>
  );
}

export default HeaderNew;
