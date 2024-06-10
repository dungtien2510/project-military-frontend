import { useState } from "react";
import { getToken } from "../../../util/token";
import style from "./RewardConfi.module.css";
import { Form, useNavigate } from "react-router-dom";
function RewardConfi() {
  const token = getToken();
  const navigate = useNavigate();
  const [valueType, setValueType] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueLevel, setValueLevel] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const changeTypeHandler = (e) => {
    setValueType(e.target.value);
  };
  const changeNameHandler = (e) => {
    setValueName(e.target.value);
  };
  const changeLevelHandler = (e) => {
    setValueLevel(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    setLoadingSubmit(true);
    const dataSubmit = {
      name: valueName,
      level: valueLevel,
      type: valueType,
    };
    fetch("http://localhost:5000/admin/reward/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSubmit),
    }).then((result) => {
      console.log(result);
      navigate("/reward/list");
      return setLoadingSubmit(false);
    });
  };
  return (
    <Form className={style.formConfi} onSubmit={submitHandler}>
      <div className={style.header}>
        <h2>Cấu hình Khen thưởng, kỷ luật</h2>
      </div>

      <div className={style.form_content}>
        <div>
          <label>Loại (Khen thưởng, kỷ luật)</label>
          <select
            className="form-select"
            style={{ height: "58%" }}
            aria-label="Default select example"
            value={valueType}
            onChange={changeTypeHandler}
          >
            <option value="">Loại</option>
            <option value="reward">Khen thưởng</option>
            <option value="discipline">Kỷ luật</option>
          </select>
        </div>
        <div className={style.content}>
          <div>
            {valueType && (
              <label>
                {valueType === "reward" ? "Tên khen thưởng" : "Tên kỷ luật"}
              </label>
            )}
            {!valueType && <label>Tên Khen thưởng, kỷ luật</label>}
            <input
              type="text"
              className="form-control"
              placeholder="Tên"
              value={valueName}
              onChange={changeNameHandler}
            />
          </div>
        </div>
        <div className={style.content}>
          <div>
            <label>Cấp độ</label>
            <input
              type="number"
              className="form-control"
              placeholder="Cấp độ"
              max="8"
              value={valueLevel}
              onChange={changeLevelHandler}
            />
          </div>
        </div>

        <div className="text-end">
          <button className="btn btn-primary" type="submit">
            {loadingSubmit && (
              <div className="spinner-border" role="status">
                <span className="visually-hidden text-center">Loading...</span>
              </div>
            )}
            {!loadingSubmit && "Lưu"}
          </button>
        </div>
      </div>
    </Form>
  );
}
export default RewardConfi;
