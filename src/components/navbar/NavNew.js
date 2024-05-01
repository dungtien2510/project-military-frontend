import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavNew() {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="">Tổng quan</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <NavDropdown title="Danh sách" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href="">
            Quân nhân
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="">
            Người thân
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" href="">
            Đơn vị
          </NavDropdown.Item>

          <NavDropdown.Item eventKey="4.4" href="">
            Khen thưởng, kỷ luật
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item>
        <NavDropdown title="Cấu hình" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1" href="">
            Đơn vị
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2" href="">
            Khen thưởng, kỷ luật
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3" href="">
            Something else here
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4" href="">
            Separated link
          </NavDropdown.Item>
        </NavDropdown>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="4.5">Giới thiệu</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default NavNew;
