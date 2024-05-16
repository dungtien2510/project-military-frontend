// import "./List.css";

import Table from "react-bootstrap/Table";
import useHttp from "../../../hooks/use-http";
import { useState, useEffect } from "react";
import { getToken } from "../../../util/token";
import style from "./ListRelative.module.css";
import { NavLink } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

function ListRelative() {
  const token = getToken();
  const { error, loading, requestAPI: getData } = useHttp();
  const [data, setData] = useState("");

  // value form
  const [valueName, setValueName] = useState("");
  const [valueNameMilitary, setNameMilitary] = useState("");
  const [valueRole, setValueRole] = useState("");

  const [valueId, setValueId] = useState("");

  const changeName = (e) => {
    setValueName(e.target.value);
  };

  const changeNameMilitary = (e) => {
    setNameMilitary(e.target.value);
  };

  const changeRole = (e) => {
    setValueRole(e.target.value);
  };
  const changeId = (e) => {
    setValueId(e.target.value);
  };

  const http = "http://localhost:5000/client/relative/list";
  const request = {
    http: http,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const applyData = (data) => {
    setData(data);
  };

  useEffect(() => {
    getData(applyData, request);
  }, []);

  const getfullDate = (date) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${
      dateNew.getMonth() + 1
    }/${dateNew.getFullYear()}`;
  };
  console.log(data, "asdfasdf");
  ////

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestSubmit = {
      http: `http://localhost:5000/client/relative/list?name=${valueName}&nameMilitary=${valueNameMilitary}&role=${valueRole}&idMilitary=${valueId}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    console.log(requestSubmit);
    const applyDataSubmit = (data) => {
      setData(data);
    };
    getData(applyDataSubmit, requestSubmit);
    console.log(data);
  };
  const getRole = (role) => {
    switch (role) {
      case "father":
        return "Bố";
      case "mother":
        return "Mẹ";
      case "wife":
        return "Vợ";
      case "children":
        return "Con";
      case "father_wife":
        return "Bố vợ";
      case "mother_wife":
        return "Mẹ vợ";
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-success-subtle p-3 rounded">
        <p className="py-0 my-0 fst-italic fs-5 fw-light">Tìm kiếm</p>
        <Row className="mb-1">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Họ và tên người thân"
              size="sm"
              onChange={changeName}
              value={valueName}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Họ và tên quân nhân"
              size="sm"
              onChange={changeNameMilitary}
              value={valueNameMilitary}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Số CMQĐ"
              size="sm"
              onChange={changeId}
              value={valueId}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustomUsername">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={changeRole}
              value={valueRole}
            >
              <option value="">Vai trò</option>
              <option value="father">Bố</option>
              <option value="mother">Mẹ</option>
              <option value="wife">Vợ</option>
              <option value="father_wife">Bố vợ</option>
              <option value="mother_wife">Mẹ vợ</option>
              <option value="children">Con</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success btn-sm d-block px-3">
            Tìm
          </button>
          <div
            className="accordion d-flex align-item-center"
            id="accordionExample"
          ></div>
        </div>
      </Form>
      <Table
        striped
        bordered
        hover
        variant="light"
        className={`${style.table}`}
      >
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Người thân của</th>
            <th>Vai trò</th>
            <th>Ngày sinh</th>
            <th>Nghề Nghiệp</th>
            <th>Số ĐT</th>
            <th>Nơi thường trú</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
          {!loading &&
            data.relatives &&
            data.relatives.map((v, i) => (
              <tr key={v._id} className="position-relative">
                <td>{i + 1}</td>
                <td>
                  <NavLink to={`/relative/detail/${v._id}`}>{v.name}</NavLink>
                </td>
                <td>
                  {v.id_military.map((v) => (
                    <NavLink to={`/military/detail/${v.id._id}`}>
                      {v.id.name}
                    </NavLink>
                  ))}
                </td>
                <td>{v.id_military.map((v) => getRole(v.role))}</td>
                <td>{getfullDate(v.birthday)}</td>

                <td>{v.job}</td>
                <td>{v.phone}</td>
                <td colSpan={2}>{v.address}</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default ListRelative;
