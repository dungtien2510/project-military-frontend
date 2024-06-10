import { Form } from "react-router-dom";
import style from "./LocationConfi.module.css";
import useHttp from "../../../hooks/use-http";
import { useCallback, useState } from "react";
import { getToken } from "../../../util/token";
import lodash from "lodash";
function LocationConfi() {
  const token = getToken();
  const { loading, error, requestAPI: requestSuggestions } = useHttp();
  const [dataMilitary, setDataMilitary] = useState([]);
  const [valueName, setValueName] = useState("");
  const [valueMaster, setValueMaster] = useState("");
  const [valueLocation, setValueLocation] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [dataLocation, setDataLocation] = useState([]);
  const [selectedIdLocation, setSelectedIdLocation] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [valueLevel, setValueLevel] = useState("");
  ////////////////////////////////////

  const changeNameHandler = (e) => {
    setValueName(e.target.value);
  };

  // search suggestions Military
  const fetchNameSuggestions = useCallback(
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
      requestSuggestions(applyData, request);
    }, 300),
    [requestSuggestions, token]
  );

  //
  const changeMasterHandler = (e) => {
    const name = e.target.value;
    setValueMaster(name);
    setSelectedId("");
    if (name.trim() !== "") {
      fetchNameSuggestions(name);
    } else {
      setDataMilitary([]); // Clear suggestions when input is empty
    }
  };

  const selectNameHandler = (e) => {
    const value = e.target.value;

    const selected = dataMilitary.find((v) => value.includes(v.id_number));

    if (selected) {
      setSelectedId(selected._id);
    }
  };
  /////////////////////////////////////////
  // search location

  const fetchLocationSuggestions = useCallback(
    lodash.debounce((location) => {
      const request = {
        http: `http://localhost:5000/client/location/listName?name=${location}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      };
      const applyData = (data) => {
        setDataLocation(data);
      };
      requestSuggestions(applyData, request);
    }, 300),
    [requestSuggestions, token]
  );
  //
  const changeLocationHandler = (e) => {
    const name = e.target.value;
    setSelectedIdLocation("");
    setValueLocation(name);
    if (name.trim() !== "") {
      fetchLocationSuggestions(name);
    } else {
      setDataLocation([]);
    }
  };
  //
  const selectedLocationHandler = (e) => {
    const value = e.target.value;
    const selected = dataLocation.find((v) => v.name === value);

    if (selected) {
      setSelectedIdLocation(selected._id);
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
      id_master: selectedId,
    };
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
          <div>
            <label>Đơn vị cấp trên</label>
            <input
              name="superior"
              list="location"
              onChange={changeLocationHandler}
              onSelect={selectedLocationHandler}
              value={valueLocation}
              type="text"
              className="form-control"
              placeholder="Tên"
              maxLength="50"
            />
            <input type="hidden" value={selectedIdLocation} name="selectedId" />

            <datalist id="location">
              {dataLocation.length !== 0 &&
                dataLocation.map((v) => <option key={v._id}>{v.name}</option>)}
            </datalist>
          </div>
          <div>
            <label>Người chỉ huy</label>
            <input
              name="master"
              list="military"
              onChange={changeMasterHandler}
              value={valueMaster}
              type="text"
              className="form-control"
              placeholder="Tên"
              onSelect={selectNameHandler}
              maxLength="100"
            />
            <input type="hidden" value={selectedId} name="selectedId" />
            <datalist id="military">
              {dataMilitary.length !== 0 &&
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
