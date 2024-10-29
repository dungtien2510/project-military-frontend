// import "./List.css";

import Table from "react-bootstrap/Table";
import useHttp from "../../../hooks/use-http";
import { useState, useEffect } from "react";
import { getToken } from "../../../util/token";
import style from "./ListLocation.module.css";
import { NavLink } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

function ListLocation() {
  const token = getToken();
  const { error, loading, requestAPI: getData } = useHttp();
  const [data, setData] = useState("");

  // value form
  const [valueName, setValueName] = useState("");
  const [valueNameMilitary, setNameMilitary] = useState("");
  const [valueLevel, setValueLevel] = useState("");

  const [valueId, setValueId] = useState("");

  const changeName = (e) => {
    setValueName(e.target.value);
  };

  const changeNameMilitary = (e) => {
    setNameMilitary(e.target.value);
  };

  const changeValue = (e) => {
    setValueLevel(e.target.value);
  };
  const changeId = (e) => {
    setValueId(e.target.value);
  };

  const http = "http://localhost:5000/client/location/list";
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

  ////

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestSubmit = {
      http: `http://localhost:5000/client/location/list?name=${valueName}&nameMilitary=${valueNameMilitary}&level=${valueLevel}&idMilitary=${valueId}`,
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    console.log(requestSubmit);
    const applyDataSubmit = (data) => {
      setData(data);
    };
    getData(applyDataSubmit, requestSubmit);
  };

  const getLevel = (level) => {
    switch (level) {
      case 1:
        return "Tiểu đội và tương đương";
      case 2:
        return "Trung đội và tương đương";
      case 3:
        return "Đại đội và tương đương";
      case 4:
        return "Tiểu đoàn và tương đương";
      case 5:
        return "Trung đoàn và tương đương";
      case 6:
        return "Sư đoàn và tương đương";
      case 7:
        return "Quân chủng và tương đương";
    }
  };

  console.log(data);
  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-success-subtle p-3 rounded">
        <p className="py-0 my-0 fst-italic fs-5 fw-light">Tìm kiếm</p>
        <Row className="mb-1">
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Tên đơn vị"
              size="sm"
              onChange={changeName}
              value={valueName}
            />
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Họ tên người chỉ huy"
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
              onChange={changeValue}
              value={valueLevel}
            >
              <option value="">Cấp đơn vị</option>
              <option value="1">Tiểu đội và tương đương</option>
              <option value="2">Trung đội và trương đương</option>
              <option value="3">Đại đội và tương đương</option>
              <option value="4">Tiểu đoàn và tương đương</option>
              <option value="5">Trung đoàn và tương đương</option>
              <option value="6">Sư đoàn và tương đương</option>
              <option value="7">Quân chủng và tương đương</option>
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
            <th>Tên đơn vị</th>
            <th>Người chi huy</th>
            <th>Đơn vị Cấp trên</th>
            <th>Cấp</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
          {!loading &&
            data.result &&
            data.result.locations.map((v, i) => (
              <tr key={v._id} className="position-relative">
                <td>{i + 1}</td>
                <td>
                  <NavLink to={`/overview/${v._id}`}>{v.name}</NavLink>
                </td>
                <td>
                  {v.master && (
                    <NavLink to={`/military/detail/${v.master.id}`}>
                      {v.master.fullName}
                    </NavLink>
                  )}
                </td>
                <td>
                  {v.superior && (
                    <NavLink to={`/overview/${v.superior._id}`}>
                      {v.superior.name}
                    </NavLink>
                  )}
                </td>
                <td>{getLevel(v.level)}</td>
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
export default ListLocation;
