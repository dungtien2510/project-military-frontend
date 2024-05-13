import "./List.css";
import Item from "./Item";
import Table from "react-bootstrap/Table";
import useHttp from "../../../hooks/use-http";
import { useState, useEffect } from "react";
import { getToken } from "../../../util/token";
import style from "./ListPage.module.css";
import { NavLink } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
// import { Form } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function List() {
  const token = getToken();
  const { error, loading, requestAPI: getData } = useHttp();
  const [data, setData] = useState("");
  const [isFilter, setIsFilter] = useState(false);
  const [dataListFilter, setDataListFilter] = useState("");
  const [valueRank, setValueRank] = useState([
    { rank: "B1", name: "Binh nhì" },
    { rank: "B2", name: "Binh nhất" },
    { rank: "H1", name: "Hạ sỹ" },
    { rank: "H2", name: "Trung sỹ" },
    { rank: "H3", name: "Thượng sỹ" },
    { rank: "1/", name: "Thiếu úy" },
    { rank: "2/", name: "Trung úy" },
    { rank: "3/", name: "Thượng úy" },
    { rank: "4/", name: "Đại úy" },
    { rank: "1//", name: "Thiếu tá" },
    { rank: "2//", name: "Trung tá" },
    { rank: "3//", name: "Thượng tá" },
    { rank: "4//", name: "Đại tá" },
  ]);
  // value form
  const [valueName, setValueName] = useState("");
  const [valueCB, setValueCB] = useState("");
  const [valueObject, setValueObject] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [valueGender, setValueGender] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueId, setValueId] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  const [valuePosition, setValuePosition] = useState("");
  const [valueAcademic, setValueAcademic] = useState("");
  const [valueBirthday, setValueBirthday] = useState("");
  const [valueJoinArmy, setValueJoinArmy] = useState("");
  const [valueMarital, setValueMarital] = useState("");
  const [valueReward, setValueReward] = useState("");
  const [valueDiscipline, setValueDiscipline] = useState("");

  const changeName = (e) => {
    setValueName(e.target.value);
  };
  const changeCB = (e) => {
    setValueCB(e.target.value);
  };

  const changeStatus = (e) => {
    setValueStatus(e.target.value);
  };
  const changeGender = (e) => {
    setValueGender(e.target.value);
  };
  const changePhone = (e) => {
    setValuePhone(e.target.value);
  };
  const changeId = (e) => {
    setValueId(e.target.value);
  };
  const changeLocation = (e) => {
    setValueLocation(e.target.value);
  };
  const changePosition = (e) => {
    setValuePosition(e.target.value);
  };
  const changeAcademic = (e) => {
    setValueAcademic(e.target.value);
  };
  const changeBirthday = (e) => {
    setValueBirthday(e.target.value);
  };
  const changeJoinArmy = (e) => {
    setValueJoinArmy(e.target.value);
  };
  const changeReward = (e) => {
    setValueReward(e.target.value);
  };
  const changeDiscipline = (e) => {
    setValueDiscipline(e.target.value);
  };
  const changeMarital = (e) => {
    setValueMarital(e.target.value);
  };
  const http = "http://localhost:5000/client/military/list";
  const request = {
    http: http,
    headers: {
      Authorization: "Bearer " + token,
    },
  };

  const clickFilterHandler = (event) => {
    setIsFilter(!isFilter);

    const requestFilter = {
      http: "http://localhost:5000/client/list/filter",
      headers: {
        Authorization: "Bearer " + token,
      },
    };
    const applyDataFilter = (data) => {
      setDataListFilter(data);
    };

    getData(applyDataFilter, requestFilter);
  };
  const applyData = (data) => {
    setData(data);
  };

  useEffect(() => {
    getData(applyData, request);
    console.log(data);
  }, []);

  const getfullDate = (date) => {
    const dateNew = new Date(date);
    return `${dateNew.getDate()}/${
      dateNew.getMonth() + 1
    }/${dateNew.getFullYear()}`;
  };

  ////
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const requestSubmit = {
      http: `http://localhost:5000/client/military/list?name=${valueName}&rank=${valueCB}&object=${valueObject}&status=${valueStatus}&gender=${valueGender}&phone=${valuePhone}&id_number=${valueId}&location=${valueLocation}&position=${valuePosition}&academic=${valueAcademic}&birthday=${valueBirthday}&join_army=${valueJoinArmy}&marital_status=${valueMarital}&reward=${valueReward}&discipline=${valueDiscipline}`,
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

  /// click đối tượng
  const chooseObjectHandler = (event) => {
    setValueObject(event.target.value);
    if (
      event.target.value === "officer" ||
      event.target.value === "serviceman"
    ) {
      setValueRank([
        { rank: "1/", name: "Thiếu úy" },
        { rank: "2/", name: "Trung úy" },
        { rank: "3/", name: "Thượng úy" },
        { rank: "4/", name: "Đại úy" },
        { rank: "1//", name: "Thiếu tá" },
        { rank: "2//", name: "Trung tá" },
        { rank: "3//", name: "Thượng tá" },
        { rank: "4//", name: "Đại tá" },
      ]);
    } else if (event.target.value === "solidier")
      setValueRank([
        { rank: "B1", name: "Binh nhì" },
        { rank: "B2", name: "Binh nhất" },
        { rank: "H1", name: "Hạ sỹ" },
        { rank: "H2", name: "Trung sỹ" },
        { rank: "H3", name: "Thượng sỹ" },
      ]);
    else {
      setValueRank([
        { rank: "B1", name: "Binh nhì" },
        { rank: "B2", name: "Binh nhất" },
        { rank: "H1", name: "Hạ sỹ" },
        { rank: "H2", name: "Trung sỹ" },
        { rank: "H3", name: "Thượng sỹ" },
        { rank: "1/", name: "Thiếu úy" },
        { rank: "2/", name: "Trung úy" },
        { rank: "3/", name: "Thượng úy" },
        { rank: "4/", name: "Đại úy" },
        { rank: "1//", name: "Thiếu tá" },
        { rank: "2//", name: "Trung tá" },
        { rank: "3//", name: "Thượng tá" },
        { rank: "4//", name: "Đại tá" },
      ]);
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="bg-success-subtle p-3 rounded">
        <p className="py-0 my-0 fst-italic fs-5 fw-light">Tìm kiếm</p>
        <Row className="mb-1">
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Họ và tên"
              size="sm"
              onChange={changeName}
              value={valueName}
            />
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom02">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={changeCB}
              value={valueCB}
            >
              <option value="">Cấp bậc</option>
              {valueRank.map((v) => (
                <option value={v.rank} key={v.rank}>
                  {v.name}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustomUsername">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={chooseObjectHandler}
              value={valueObject}
            >
              <option value="">Đối tượng</option>
              <option value="officer">Sỹ quan</option>
              <option value="serviceman">QNCN</option>
              <option value="soldier">HSQ, CS</option>
              <option value="worker">CN, VCQP</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustomUsername">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={changeStatus}
              value={valueStatus}
            >
              <option value="">Trạng thái</option>
              <option value="x">Có mặt</option>
              <option value="p">Phép</option>
              <option value="ct">Công tác</option>
              <option value="v">Bệnh viện</option>
              <option value="bx">Bệnh xá</option>
              <option value="n">Vắng mặt</option>
              <option value="k">Khác</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustomUsername">
            <Form.Select
              aria-label="Default select example"
              size="sm"
              onChange={changeGender}
              value={valueGender}
            >
              <option value="">Giới tính</option>
              <option value="male">Nam</option>
              <option value="female">Nữ</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} md="2" controlId="validationCustom01">
            <Form.Control
              type="text"
              placeholder="Số điện thoại"
              size="sm"
              onChange={changePhone}
              value={valuePhone}
            />
          </Form.Group>
        </Row>
        {isFilter && loading && (
          <div className="spinner-border" role="status">
            <span className="visually-hidden text-center">Loading...</span>
          </div>
        )}
        {isFilter && !loading && (
          <>
            <Row className="mb-1">
              <Form.Group as={Col} md="2" controlId="validationCustom01">
                <Form.Control
                  type="text"
                  placeholder="Số CMQĐ"
                  size="sm"
                  onChange={changeId}
                  value={valueId}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changeLocation}
                  value={valueLocation}
                >
                  <option value="">đơn vị</option>
                  {dataListFilter &&
                    dataListFilter.locations.map((v) => (
                      <option value={v._id} key={v._id}>
                        {v.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changePosition}
                  value={valuePosition}
                >
                  <option value="">chức vụ</option>
                  {dataListFilter &&
                    dataListFilter.positions.map((v) => (
                      <option value={v._id} key={v._id}>
                        {v.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} md="2" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changeAcademic}
                  value={valueAcademic}
                >
                  <option value="">Trình độ</option>
                  <option value="engineer">Kỹ sư</option>
                  <option value="university">Đại học</option>
                  <option value="college">Cao đẳng</option>
                  <option value="intermediate">Trung Cấp</option>
                  <option value="elementary">Sơ cấp</option>
                  <option value="diff">Khác</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom01">
                <Form.Control
                  type="number"
                  placeholder="Năm sinh"
                  // onFocus={(e) => (e.target.type = "year")}
                  // onBlur={(e) => (e.target.type = "text")}
                  min="1950"
                  max={new Date().getFullYear()}
                  size="sm"
                  onChange={changeBirthday}
                  value={valueBirthday}
                />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="validationCustom01">
                <Form.Control
                  type="number"
                  placeholder="Năm nhập ngũ"
                  // onFocus={(e) => (e.target.type = "year")}
                  // onBlur={(e) => (e.target.type = "text")}
                  min="1950"
                  max={new Date().getFullYear()}
                  size="sm"
                  onChange={changeJoinArmy}
                  value={valueJoinArmy}
                />
              </Form.Group>
            </Row>
            <Row className="mb-1">
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changeMarital}
                  value={valueMarital}
                >
                  <option value="">Tình trạng hôn nhân</option>
                  <option value="single">Độc thân</option>
                  <option value="married">Có gia đình</option>
                  <option value="unmarried">Đơn thân</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changeReward}
                  value={valueReward}
                >
                  <option value="">Khen Thưởng</option>
                  {dataListFilter &&
                    dataListFilter.reward.map((v) => (
                      <option value={v._id} key={v._id}>
                        {v.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                <Form.Select
                  aria-label="Default select example"
                  size="sm"
                  onChange={changeDiscipline}
                  value={valueDiscipline}
                >
                  <option value="">Kỷ luật</option>
                  {dataListFilter &&
                    dataListFilter.discipline.map((v) => (
                      <option value={v._id} key={v._id}>
                        {v.name}
                      </option>
                    ))}
                </Form.Select>
              </Form.Group>
            </Row>
          </>
        )}

        <div className="d-flex justify-content-end gap-2">
          <button type="submit" className="btn btn-success btn-sm d-block px-3">
            Tìm
          </button>
          <div
            className="accordion d-flex align-item-center"
            id="accordionExample"
          >
            <button
              className="accordion-button py-0 border-none"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              onClick={clickFilterHandler}
            ></button>
          </div>
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
            <th>Cấp bậc</th>
            <th>Chức vụ</th>
            <th>Đơn vị</th>
            <th>Ngày sinh</th>
            <th>Nhập ngũ</th>
            <th>Số ĐT</th>
            <th>Nơi thường trú</th>
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
            data.military &&
            data.military.map((v, i) => (
              <tr key={i} className="position-relative">
                <td>{i + 1}</td>
                <td>{v.name}</td>
                <td>{v.rank}</td>
                <td>{v.position.name}</td>
                <td>{v.location.name}</td>
                <td>{getfullDate(v.birthday)}</td>
                <td>{getfullDate(v.join_army)}</td>
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
export default List;
