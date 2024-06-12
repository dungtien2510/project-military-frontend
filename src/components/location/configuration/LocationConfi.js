import { Form } from "react-router-dom";
import style from "./LocationConfi.module.css";
import { useState } from "react";
import { getToken } from "../../../util/token";
import InputSuggestion from "../../inputSugges/InputSuggestion";
function LocationConfi() {
  const token = getToken();

  const [valueName, setValueName] = useState("");

  const [selectedIdLocation, setSelectedIdLocation] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [valueLevel, setValueLevel] = useState("");

  ///
  const [selectedIdMilitary, setSelectedIdMilitary] = useState("");

  ////////////////////////////////////

  const changeNameHandler = (e) => {
    setValueName(e.target.value);
  };
  ///search suggestions
  const setLocationId = (data, value) => {
    if (!value) setSelectedIdLocation("");
    const selectedLocation = data.find((v) => v.name === value);
    if (selectedLocation) {
      setSelectedIdLocation(selectedLocation._id);
    }
  };
  const setOptionLocation = (value) => {
    return value.name;
  };

  ///search suggestions military
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
  //////////////////////////////////
  ///////////
  //submit
  const submitHandler = (e) => {
    e.preventDefault();
    const dataSubmit = {
      name: valueName,
      level: valueLevel,
      superior: selectedIdLocation,
      id_master: selectedIdMilitary,
    };
    console.log(dataSubmit);
    setLoadingSubmit(true);
    fetch("http://localhost:5000/admin/location/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSubmit),
    }).then((results) => {
      console.log(results);
      return setLoadingSubmit(false);
    });
  };

  const changeLevel = (e) => {
    setValueLevel(e.target.value);
  };
  return (
    <Form className={style.formConfi} onSubmit={submitHandler}>
      <div className={style.header}>
        <h2>Cấu hình đơn vị</h2>
      </div>
      <div className={style.form_content}>
        <div className={style.content}>
          <div>
            <label>Tên đơn vị</label>
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
            <label>Cấp đơn vị</label>
            <select
              name="level"
              className="form-select"
              style={{ height: "58%" }}
              aria-label="Default select example"
              value={valueLevel}
              onChange={changeLevel}
            >
              <option value="">Cấp đơn vị</option>
              <option value="1">Tiểu đội và tương đương</option>
              <option value="2">Trung đội và trương đương</option>
              <option value="3">Đại đội và tương đương</option>
              <option value="4">Tiểu đoàn và tương đương</option>
              <option value="5">Trung đoàn và tương đương</option>
              <option value="6">Sư đoàn và tương đương</option>
              <option value="7">Quân chủng và tương đương</option>
            </select>
          </div>
        </div>
        <div className={style.content}>
          <InputSuggestion
            id="location"
            label="Đơn vị cấp trên"
            http="http://localhost:5000/client/location/listName?name="
            setId={setLocationId}
            setOption={setOptionLocation}
          />

          <InputSuggestion
            id="milirary"
            label="Người chỉ huy"
            http="http://localhost:5000/client/military/listName?name="
            setId={setMilitaryId}
            setOption={setOptionMilitary}
          />
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
export default LocationConfi;
