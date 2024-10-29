import { Form } from "react-router-dom";
import style from "./PositionConfi.module.css";
import { useState } from "react";
import { getToken } from "../../../util/token";
function PositionConfi() {
  const token = getToken();

  const [valueName, setValueName] = useState("");
  const [valueRank, setValueRank] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [valueLevel, setValueLevel] = useState("");

  ///

  ////////////////////////////////////

  const changeNameHandler = (e) => {
    setValueName(e.target.value);
  };

  //////////////////////////////////
  ///////////
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    const dataSubmit = {
      name: valueName,
      level: valueLevel,
      rank: valueRank,
    };
    console.log(dataSubmit);
    setLoadingSubmit(true);
    fetch("http://localhost:5000/admin/position/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSubmit),
    })
      .then((results) => {
        setLoadingSubmit(false);
        return results.json();
      })
      .then((results) => {
        console.log(results);
      });
  };

  const changeRank = (e) => {
    setValueRank(e.target.value);
  };
  const changeLevelHandler = (e) => {
    setValueLevel(e.target.value);
  };
  const listRanks = [
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
  ];
  return (
    <Form className={style.formConfi} onSubmit={submitHandler}>
      <div className={style.header}>
        <h2>Cấu hình chức vụ</h2>
      </div>
      <div className={style.form_content}>
        <div className={style.content}>
          <div>
            <label>Tên chức vụ</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tên"
              name="name"
              value={valueName}
              onChange={changeNameHandler}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Cấp bậc quân hàm cao nhất</label>
            <select
              name="rank"
              className="form-select"
              style={{ height: "58%" }}
              aria-label="Default select example"
              value={valueRank}
              onChange={changeRank}
            >
              <option value="">Chọn quân hàm</option>
              {listRanks.map((v, i) => (
                <option value={v.rank} key={i}>
                  {v.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Hệ số</label>
            <input
              type="number"
              className="form-control"
              placeholder="Hệ số"
              name="level"
              min="0"
              step="0.01"
              value={valueLevel}
              onChange={changeLevelHandler}
              autoComplete="off"
            />
          </div>
          <div className={style.btn}>
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
      </div>
    </Form>
  );
}
export default PositionConfi;
