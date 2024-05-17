// import "./List.css";

import Table from "react-bootstrap/Table";
import useHttp from "../../../hooks/use-http";
import { useState, useEffect } from "react";
import { getToken } from "../../../util/token";
import style from "./ListReward.module.css";
import { NavLink } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

function ListReward() {
  const token = getToken();
  const { error, loading, requestAPI: getData } = useHttp();
  const [data, setData] = useState("");

  // value form
  const [valueName, setValueName] = useState("");
  const [valueLevel, setValueLevel] = useState("");

  const [valueType, setValueType] = useState("");

  const changeName = (e) => {
    setValueName(e.target.value);
  };

  const changeLevel = (e) => {
    setValueLevel(e.target.value);
  };
  const changeType = (e) => {
    setValueType(e.target.value);
  };

  const http = "http://localhost:5000/client/reward/list";
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
  console.log(data);
  ////

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestSubmit = {
      http: `http://localhost:5000/client/reward/list?name=${valueName}&level=${valueLevel}&type=${valueType}`,
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
  //
  const clickEditHandler = (event) => {};
  const clickDeleteHandler = (event) => {};
  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-success-subtle p-3 rounded">
        <p className="py-0 my-0 fst-italic fs-5 fw-light">Tìm kiếm</p>
        <Row className="mb-1">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Tên khen thưởng kỹ luật"
              size="sm"
              onChange={changeName}
              value={valueName}
            />
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Control
              type="number"
              min="1"
              max="8"
              placeholder="Cấp độ"
              size="sm"
              onChange={changeLevel}
              value={valueLevel}
            />
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={changeType}
              value={valueType}
            >
              <option value="">Loại</option>
              <option value="reward">Khen thưởng</option>
              <option value="discipline">Kỹ luật</option>
            </Form.Select>
          </Form.Group>
        </Row>

        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success btn-sm d-block px-3">
            Tìm
          </button>
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
            <th>Tên khen thưởng, kỷ luật</th>
            <th>loại</th>
            <th>Cấp độ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <tr>
              <td>
                <div className="spinner-border" role="status">
                  <span className="visually-hidden text-center">
                    Loading...
                  </span>
                </div>
              </td>
            </tr>
          )}
          {!loading &&
            data.result &&
            data.result.map((v, i) => (
              <tr key={v._id} className="position-relative">
                <td>{i + 1}</td>
                <td>{v.name}</td>
                <td>{v.type === "reward" ? "Khen thưởng" : "Kỷ luật"}</td>
                <td>{v.level}</td>
                <td>
                  <div className="d-flex justify-content-end gap-2">
                    <button
                      type="button"
                      onClick={clickEditHandler}
                      className="btn btn-success btn-sm d-block px-3"
                    >
                      Sửa
                    </button>
                    <button
                      type="button"
                      onClick={clickDeleteHandler}
                      className="btn btn-danger btn-sm d-block px-3"
                    >
                      Xóa
                    </button>
                  </div>
                </td>
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
export default ListReward;
