import { Form } from "react-router-dom";
import style from "./LocationConfi.module.css";
import useHttp from "../../../hooks/use-http";
import { useCallback, useState } from "react";
import { getToken } from "../../../util/token";
import lodash from "lodash";
function LocationConfi() {
  const token = getToken();
  const { loading, error, requestAPI: requestMilitary } = useHttp();
  const [dataMilitary, setDataMilitary] = useState("");
  const [valueName, setValueName] = useState("");
  const [valueInputMili, setValueInputMili] = useState("");
  const fetchSuggestions = useCallback(
    lodash.debounce((name) => {
      const request = {
        http: `http://localhost:5000/client/military/listName?name=${name}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const applyData = (data) => {
        setDataMilitary(data);
      };
      requestMilitary(applyData, request);
    }, 300),
    [requestMilitary, token]
  );

  const changeNameHandler = (e) => {
    const name = e.target.value;
    setValueName(name);
    if (name.trim() !== "") {
      fetchSuggestions(name);
    } else {
      setDataMilitary([]); // Clear suggestions when input is empty
    }
  };
  console.log(dataMilitary);
  const submitHandler = (e) => {};
  return (
    <Form className={style.formConfi} onSubmit={submitHandler}>
      <div className={style.header}>
        <h2>Cấu hình đơn vị</h2>
      </div>
      <div className={style.form_content}>
        <div className={style.content}>
          <div>
            <label>Tên đơn vị</label>
            <input type="text" className="form-control" placeholder="Tên" />
          </div>
          <div>
            <label>Cấp đơn vị</label>
            <select
              className="form-select"
              style={{ height: "58%" }}
              aria-label="Default select example"
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
          <div>
            <label>Đơn vị cấp trên</label>
            <input type="text" className="form-control" placeholder="Tên" />
          </div>
          <div>
            <label>Người chỉ huy</label>
            <input
              list="military"
              onChange={changeNameHandler}
              value={valueName}
              type="text"
              className="form-control"
              placeholder="Tên"
            />
            <datalist id="military">
              {dataMilitary &&
                dataMilitary.map((v) => (
                  <option
                    key={v._id}
                  >{`${v.rank} ${v.name} (ID:${v.id_number})`}</option>
                ))}
            </datalist>
          </div>
        </div>
        <div className="text-end">
          <button className="btn btn-primary" type="submit">
            Lưu
          </button>
        </div>
      </div>
    </Form>
  );
}
export default LocationConfi;
