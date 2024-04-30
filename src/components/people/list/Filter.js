// import { Form } from "react-router-dom";
// import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
// import InputGroup from "react-bootstrap/InputGroup";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import style from "./Filter.module.css";

function Filter() {
  const [validated, setValidted] = useState();
  const handleSubmit = () => {};

  return (
    // <Nav variant="pills" activeKey="1">
    //   <Nav.Item>
    //     <InputGroup className="mb-3" size="sm">
    //       <InputGroup.Text id="inputGroup-sizing-default">
    //         Họ tên
    //       </InputGroup.Text>
    //       <Form.Control
    //         aria-label="Default"
    //         aria-describedby="inputGroup-sizing-default"
    //       />
    //     </InputGroup>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <InputGroup className="mb-3" size="sm">
    //       <InputGroup.Text id="inputGroup-sizing-default">
    //         Quê quán
    //       </InputGroup.Text>
    //       <Form.Control
    //         aria-label="Default"
    //         aria-describedby="inputGroup-sizing-default"
    //       />
    //     </InputGroup>
    //   </Nav.Item>
    //   <Nav.Item>
    //     <Nav.Link eventKey="3" disabled>
    //       NavLink 3 content
    //     </Nav.Link>
    //   </Nav.Item>

    //   {/* <NavDropdown title="Cấp bậc" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="1/">Thiếu úy</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="2/">Trung úy</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="3/">Thượng úy</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4/">Đại úy</NavDropdown.Item>

    //     <NavDropdown.Divider />
    //     <NavDropdown.Item eventKey="1//">Thiếu Tá</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="2//">Trung tá</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="3//">Thượng tá</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="4//">Đại tá</NavDropdown.Item>
    //   </NavDropdown>
    //   <NavDropdown title="Chức vụ" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="at">Tiểu đội trưởng</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="bt">Trung đội trưởng</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="cp">Phó đại đội trưởng</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="ctvp">Chính trị viên phó</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="ct">Đại đội trưởng</NavDropdown.Item>
    //   </NavDropdown>
    //   <NavDropdown title="Đối tượng" id="nav-dropdown">
    //     <NavDropdown.Item eventKey="officer">Sĩ quan</NavDropdown.Item>
    //     <NavDropdown.Item eventKey="pro_serviceman">
    //       Quân nhân chuyên nghiệp
    //     </NavDropdown.Item>
    //     <NavDropdown.Item eventKey="soldier">
    //       Hạ sĩ quan, chiến sĩ
    //     </NavDropdown.Item>
    //   </NavDropdown> */}
    // </Nav><>
    <Form
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
      className={style.formFilter}
    >
      <Row className="">
        <Form.Group as={Col} md="2" controlId="validationCustom01">
          <InputGroup className="mb-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-default">
              Họ tên
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <InputGroup className="mb3-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-default">
              Đối tượng
            </InputGroup.Text>

            <Form.Select aria-label="Default select example">
              <option>All</option>
              <option value="officer">Sĩ quan</option>
              <option value="pro_serviceman">Quân nhân chuyển nghiệp</option>
              <option value="soldier">Hạ sĩ quan, Chiến sĩ</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustomUsername">
          <InputGroup className="mb3-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-default">
              Đơn vị
            </InputGroup.Text>

            <Form.Select aria-label="Default select example">
              <option>All</option>
              <option value="1/">Tiểu đội TĐ-VQ</option>
              <option value="2/">Trung đội 1</option>
            </Form.Select>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <InputGroup className="mb-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-default">
              Quê quán
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="2" controlId="validationCustom02">
          <InputGroup className="mb-3" size="sm">
            <InputGroup.Text id="inputGroup-sizing-default">
              Nơi ở hiện nay
            </InputGroup.Text>
            <Form.Control
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
            />
          </InputGroup>
        </Form.Group>
        <Button type="submit" as={Col} md="1" className="h-100 p-1 ms-auto">
          Tìm
        </Button>
      </Row>
    </Form>
  );
}
export default Filter;
