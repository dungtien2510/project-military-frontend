import { Form } from "react-router-dom";
import style from "./RelativeConfig.module.css";
import InputSuggestion from "../../inputSugges/InputSuggestion";
import { useState } from "react";
import { getToken } from "../../../util/token";

function RelativeConfig() {
  const [selectedIdMilitary, setSelectedIdMilitary] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [valueName, setValueName] = useState("");
  const [valueBirthday, setValueBirthday] = useState("");
  const [valueJob, setValueJob] = useState("");
  const [valueGender, setValueGender] = useState("");
  const [valueRole, setValueRole] = useState("");
  const [valueHometown, setValueHometown] = useState("");
  const [valueAddress, setValueAddress] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueNote, setValueNote] = useState("");
  const changeName = (e) => {
    setValueName(e.target.value);
  };
  const changeBirthday = (e) => {
    setValueBirthday(e.target.value);
  };
  const changeJob = (e) => {
    setValueJob(e.target.value);
  };
  const changeGender = (e) => {
    setValueGender(e.target.value);
  };
  const changeRole = (e) => {
    setValueRole(e.target.value);
  };
  const changeHometown = (e) => {
    setValueHometown(e.target.value);
  };
  const changeAddress = (e) => {
    setValueAddress(e.target.value);
  };
  const changePhone = (e) => {
    setValuePhone(e.target.value);
  };
  const changeNote = (e) => {
    setValueNote(e.target.value);
  };
  const token = getToken();
  ///input suggestions military
  const setOptionMilitary = (value) => {
    return `${value.rank} ${value.name} ${value.id_number}`;
  };
  const setMilitaryId = (data, value) => {
    if (!value) setSelectedIdMilitary("");
    const selectedMilitary = data.find((v) => value.includes(v.id_number));
    if (selectedMilitary) {
      setSelectedIdMilitary(selectedMilitary._id);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setLoadingSubmit(true);
    const dataSubmit = {
      name: valueName,
      id_military: [{ id: selectedIdMilitary, role: valueRole }],

      birthday: valueBirthday,
      gender: valueGender,
      hometown: valueHometown,
      address: valueAddress,
      job: valueJob,
      note: valueNote,
      phone: valuePhone,
    };
    fetch("http://localhost:5000/admin/relative/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(dataSubmit),
    })
      .then((result) => {
        setLoadingSubmit(false);
        return result.json();
      })
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <Form onSubmit={submitHandler}>
      <>
        <div className={style.header}>
          <div>
            <h2>Thêm người thân</h2>
          </div>
        </div>
        <div className={style.content}>
          <div className={style.content_info}>
            <h5>Thông tin cá nhân</h5>
            <div className={style.content_ul}>
              <ul className="border-end border-primary">
                <li>
                  <div>
                    <label>Họ và tên</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tên"
                      name="name"
                      autoComplete="off"
                      value={valueName}
                      onChange={changeName}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Nghề nghiệp</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nghề nghiệp"
                      name="name"
                      autoComplete="off"
                      value={valueJob}
                      onChange={changeJob}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Giới tính</label>
                    <select
                      className="form-select"
                      style={{ height: "58%" }}
                      aria-label="Default select example"
                      value={valueGender}
                      onChange={changeGender}
                    >
                      <option value="">Giới tính</option>
                      <option value="male">Nam</option>
                      <option value="female">Nữ</option>
                    </select>
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <label>Ngày tháng năm sinh</label>
                    <input
                      type="date"
                      max={new Date()}
                      className="form-control"
                      placeholder="Tên"
                      name="name"
                      autoComplete="off"
                      value={valueBirthday}
                      onChange={changeBirthday}
                    />
                  </div>
                </li>
                <li>
                  <InputSuggestion
                    id="milirary"
                    label="Người thân của quân nhân"
                    http="http://localhost:5000/client/military/listName?name="
                    setId={setMilitaryId}
                    setOption={setOptionMilitary}
                  />
                </li>
                <li>
                  <div>
                    <label>Vai trò</label>
                    <select
                      name="level"
                      className="form-select"
                      style={{ height: "58%" }}
                      aria-label="Default select example"
                      value={valueRole}
                      onChange={changeRole}
                    >
                      <option value="">Vai trò</option>
                      <option value="father">Bố đẻ</option>
                      <option value="mother">Mẹ đẻ</option>
                      <option value="wife">Vợ</option>
                      <option value="father_wife">Bố vợ</option>
                      <option value="mother_wife">Mẹ vợ</option>
                      <option value="children">Con</option>
                    </select>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.content_info}>
            <h5>Thông tin liên hệ</h5>
            <div className={style.content_ul}>
              <ul className="border-end border-primary">
                <li>
                  <div>
                    <label>Quê Quán</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Hòa thuận Tây - Hải Châu - Đà Nẵng"
                      autoComplete="off"
                      value={valueHometown}
                      onChange={changeHometown}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Nơi ở hiện tại</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="81 - Duy Tân - Hải Châu - Đà Nẵng"
                      autoComplete="off"
                      value={valueAddress}
                      onChange={changeAddress}
                    />
                  </div>
                </li>
              </ul>
              <ul>
                <li>
                  <div>
                    <label>Số điện thoại</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0123456789"
                      autoComplete="off"
                      value={valuePhone}
                      onChange={changePhone}
                    />
                  </div>
                </li>
                <li>
                  <div>
                    <label>Ghi chú</label>
                    <input
                      type="text"
                      className="form-control"
                      autoComplete="off"
                      value={valueNote}
                      onChange={changeNote}
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-end">
            <button className="btn btn-primary" type="submit">
              {loadingSubmit && (
                <div className="spinner-border" role="status">
                  <span className="visually-hidden text-center">
                    Loading...
                  </span>
                </div>
              )}
              {!loadingSubmit && "Lưu"}
            </button>
          </div>
        </div>
      </>
    </Form>
  );
}
export default RelativeConfig;
