import { Form, redirect, useNavigate } from "react-router-dom";
import style from "./MilitaryConfig.module.css";
import InputSuggestion from "../../inputSugges/InputSuggestion";
import { useState } from "react";
import { getToken } from "../../../util/token";
import Table from "react-bootstrap/Table";
import { get } from "lodash";
import MilitaryConfigReward from "./MilitaryConfigReward";
import MilitaryConfigRelative from "./MilitaryConfigRelative";
function MilitaryConfig() {
  const token = getToken();
  const [valueName, setValueName] = useState("");
  const [valueId, setValueId] = useState("");
  const [valueBirthday, setValueBirthday] = useState("");
  const [valueGender, setValueGender] = useState("");
  const [valueObject, setValueObject] = useState("");
  const [valueRank, setValueRank] = useState("");
  const [valueListRank, setValueListRank] = useState([]);
  const [valueRankTime, setValueRankTime] = useState("");
  const [selectedIdLocation, setSelectedIdLocation] = useState("");
  const [selectedIdPosition, setSelectedIdPosition] = useState("");
  const [valueJoinArmy, setValueJoinArmy] = useState("");
  const [valueAcademic, setValueAcademic] = useState("");
  const [valueEx, setValueEx] = useState("");
  const [valueStatus, setValueStatus] = useState("");
  const [valueMarital, setValueMarital] = useState("");
  const [valueReason, setValueReason] = useState("");
  const [valueAddress, setValueAddress] = useState("");
  const [valueHometown, setValueHometown] = useState("");
  const [valuePhone, setValuePhone] = useState("");
  const [valueParty, setValueParty] = useState("");
  const [valueUnion, setValueUnion] = useState("");
  const [valueNote, setValueNote] = useState("");
  const [loadingSubmit, setLoadingSubmit] = useState("");

  //
  const [dataReward, setDataReward] = useState([]);
  //

  const [dataRelative, setDataRelative] = useState([]);
  //
  const navigate = useNavigate();
  const changeNameHandler = (e) => {
    setValueName(e.target.value);
  };
  const changeIdHandler = (e) => {
    setValueId(e.target.value);
  };
  const changeBirthdayHandler = (e) => {
    setValueBirthday(e.target.value);
  };
  const changeGender = (e) => {
    setValueGender(e.target.value);
  };
  const changeObjectHandler = (e) => {
    setValueObject(e.target.value);

    if (e.target.value === "officer" || e.target.value === "serviceman") {
      setValueListRank([
        { rank: "1/", name: "Thiếu úy" },
        { rank: "2/", name: "Trung úy" },
        { rank: "3/", name: "Thượng úy" },
        { rank: "4/", name: "Đại úy" },
        { rank: "1//", name: "Thiếu tá" },
        { rank: "2//", name: "Trung tá" },
        { rank: "3//", name: "Thượng tá" },
        { rank: "4//", name: "Đại tá" },
      ]);
    } else if (e.target.value === "solidier")
      setValueListRank([
        { rank: "B1", name: "Binh nhì" },
        { rank: "B2", name: "Binh nhất" },
        { rank: "H1", name: "Hạ sỹ" },
        { rank: "H2", name: "Trung sỹ" },
        { rank: "H3", name: "Thượng sỹ" },
      ]);
    else {
      setValueListRank([
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
  const changeRankHandler = (e) => {
    setValueRank(e.target.value);
  };
  const changeRankTimeHandler = (e) => {
    setValueRankTime(e.target.value);
  };
  const changeJoinArmyHandler = (e) => {
    setValueJoinArmy(e.target.value);
  };
  const changeStatusHandler = (e) => {
    setValueStatus(e.target.value);
  };
  const changeMaritalHandler = (e) => {
    setValueMarital(e.target.value);
  };
  const changePartyHandler = (e) => {
    setValueParty(e.target.value);
  };
  const changeReasonHandler = (e) => {
    setValueReason(e.target.value);
  };
  const changeAddressHandler = (e) => {
    setValueAddress(e.target.value);
  };
  const changeHometownHandler = (e) => {
    setValueHometown(e.target.value);
  };
  const changePhoneHandler = (e) => {
    setValuePhone(e.target.value);
  };
  const changeUnionHandler = (e) => {
    setValueUnion(e.target.value);
  };
  const changeAcademicHandler = (e) => {
    setValueAcademic(e.target.value);
  };

  const changeExHandler = (e) => {
    setValueEx(e.target.value);
  };
  const changeNoteHandler = (e) => {
    setValueNote(e.target.value);
  };

  //input suggestions reward
  const setReward = (data) => {
    const dataReward = data.map((v) => {
      return { id: v._id, date: v.year, note: v.note, type: v.type };
    });
    setDataReward(dataReward);
  };
  //input value family

  //input suggestion location
  const setOption = (value) => {
    return value.name;
  };
  const setLocationId = (data, value) => {
    if (!value) setSelectedIdLocation("");
    const selectedLocation = data.find((v) => v.name === value);
    if (selectedLocation) {
      setSelectedIdLocation(selectedLocation._id);
    }
  };
  //input suggestion position

  const setPositionId = (data, value) => {
    if (!value) setSelectedIdPosition("");
    const selectedIdPosition = data.find((v) => v.name === value);
    if (selectedIdPosition) {
      setSelectedIdPosition(selectedIdPosition._id);
    }
  };
  //get year
  const getYear = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    return year;
  };

  //
  const submitHandler = (e) => {
    e.preventDefault();
    const dataSubmit = {
      name: valueName,
      id_number: valueId,
      object: valueObject,
      rank: valueRank,
      rank_time: valueRankTime,
      academic_level: valueAcademic,
      position: selectedIdPosition,
      location: selectedIdLocation,
      birthday: valueBirthday,
      join_army: valueJoinArmy,
      gender: valueGender,
      hometown: valueHometown,
      address: valueAddress,
      note: valueNote,
      status: valueStatus,
      marital_status: valueMarital,
      party: valueParty,
      union_member: valueUnion,
    };
    console.log(dataReward, dataRelative);
    if (dataReward.length > 0) dataSubmit.reward = dataReward;
    if (dataRelative.length > 0) dataSubmit.family = dataRelative;
    console.log(dataSubmit);
    setLoadingSubmit(true);
    fetch("http://localhost:5000/admin/military/add", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataSubmit),
    })
      .then((results) => {
        setLoadingSubmit(false);
        console.log(results);
        return results.json();
      })
      .then((results) => {
        console.log(results);
        return navigate("/military/detail/" + results.id_military);
      });
  };
  return (
    <Form onSubmit={submitHandler}>
      <div className={style.header}>
        <div>
          <h2>Thêm Quân nhân</h2>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <h5>Thông tin cá nhân</h5>
          <ul>
            <li>
              <div>
                <label>Tên Quân nhân</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tên"
                  value={valueName}
                  onChange={changeNameHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Số CMQĐ</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Số chứng minh"
                  value={valueId}
                  onChange={changeIdHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Ngày tháng năm sinh</label>
                <input
                  type="date"
                  className="form-control"
                  value={valueBirthday}
                  onChange={changeBirthdayHandler}
                  autoComplete="off"
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
            <li>
              <div>
                <label>Đối tượng</label>
                <select
                  className="form-select"
                  style={{ height: "58%" }}
                  aria-label="Default select example"
                  value={valueObject}
                  onChange={changeObjectHandler}
                >
                  <option value="">Đối tượng</option>
                  <option value="officer">Sĩ Quan</option>
                  <option value="serviceman">Quân nhân chuyên nghiệp</option>
                  <option value="solidier">Chiến sĩ</option>
                  <option value="student">Học viên</option>
                  <option value="worker">CN, VCQP</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <label>Cấp bậc</label>
                <select
                  className="form-select"
                  style={{ height: "58%" }}
                  aria-label="Default select example"
                  value={valueRank}
                  onChange={changeRankHandler}
                >
                  <option value="">Cấp bậc</option>
                  {valueListRank.map((v) => (
                    <option value={v.rank} key={v.rank}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </li>
            <li>
              <div>
                <label>Tháng Năm nhận</label>
                <input
                  type="date"
                  className="form-control"
                  value={valueRankTime}
                  onChange={changeRankTimeHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <InputSuggestion
                id="position"
                label="Chức vụ"
                setId={setPositionId}
                setOption={setOption}
                http="http://localhost:5000/client/position/listName?name="
              />
            </li>
            <li>
              <InputSuggestion
                id="location"
                label="Đơn vị"
                setId={setLocationId}
                setOption={setOption}
                http="http://localhost:5000/client/location/listName?name="
              />
            </li>
            <li>
              <div>
                <label>Nhập ngũ</label>
                <input
                  type="date"
                  className="form-control"
                  value={valueJoinArmy}
                  onChange={changeJoinArmyHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Trình độ</label>
                <select
                  className="form-select"
                  style={{ height: "58%" }}
                  aria-label="Default select example"
                  value={valueAcademic}
                  onChange={changeAcademicHandler}
                >
                  <option value="">Trình độ</option>
                  <option value="engineer">Kỹ sư</option>
                  <option value="university">Đại học</option>
                  <option value="college">Cao đẳng</option>
                  <option value="intermediate">Trung Cấp</option>
                  <option value="elementary">Sơ cấp</option>
                  <option value="diff">Khác</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <label>Trình độ chuyên môn</label>
                <input
                  type="text"
                  className="form-control"
                  value={valueEx}
                  onChange={changeExHandler}
                  autoComplete="off"
                  placeholder="Công nghệ thông tin"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Tình trạng hôn nhân</label>
                <select
                  className="form-select"
                  style={{ height: "58%" }}
                  aria-label="Default select example"
                  value={valueMarital}
                  onChange={changeMaritalHandler}
                >
                  <option value="">Tình trạng hôn nhân</option>
                  <option value="single">Độc thân</option>
                  <option value="married">Có gia đình</option>
                  <option value="unmarried">Đơn thân</option>
                </select>
              </div>
            </li>
            <li>
              <div>
                <label>Tình trạng</label>
                <select
                  className="form-select"
                  style={{ height: "58%" }}
                  aria-label="Default select example"
                  value={valueStatus}
                  onChange={changeStatusHandler}
                >
                  <option value="">Trạng thái</option>
                  <option value="x">Có mặt</option>
                  <option value="p">Phép</option>
                  <option value="ct">Công tác</option>
                  <option value="v">Bệnh viện</option>
                  <option value="bx">Bệnh xá</option>
                  <option value="n">Vắng mặt</option>
                  <option value="k">Khác</option>
                </select>
              </div>
            </li>
            <li>
              {valueStatus && valueStatus !== "x" && valueStatus !== "n" && (
                <div>
                  <label>Lý do</label>
                  <input
                    type="text"
                    className="form-control"
                    value={valueReason}
                    onChange={changeReasonHandler}
                    autoComplete="off"
                    placeholder=""
                  />
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className={style.info}>
          <h5>Thông tin liên hệ</h5>
          <ul>
            <li>
              <div>
                <label>Quê Quán</label>
                <input
                  type="text"
                  className="form-control"
                  value={valueHometown}
                  onChange={changeHometownHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Địa chỉ</label>
                <input
                  type="text"
                  className="form-control"
                  value={valueAddress}
                  onChange={changeAddressHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Số điện thoại</label>
                <input
                  type="text"
                  className="form-control"
                  value={valuePhone}
                  onChange={changePhoneHandler}
                  autoComplete="off"
                  placeholder="0981234567"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Ghi chú</label>
                <input
                  type="text"
                  className="form-control"
                  value={valueNote}
                  onChange={changeNoteHandler}
                  autoComplete="off"
                />
              </div>
            </li>
          </ul>
        </div>
        <div className={style.dang}>
          <h5>Đảng, đoàn</h5>
          <ul>
            <li>
              <div>
                <label>Vào đảng</label>
                <input
                  type="date"
                  className="form-control"
                  value={valueParty}
                  onChange={changePartyHandler}
                  autoComplete="off"
                />
              </div>
            </li>
            <li>
              <div>
                <label>Vào đoàn</label>
                <input
                  type="date"
                  className="form-control"
                  value={valueUnion}
                  onChange={changeUnionHandler}
                  autoComplete="off"
                />
              </div>
            </li>
          </ul>
        </div>

        <MilitaryConfigReward setReward={setReward} />

        <MilitaryConfigRelative setRelative={setDataRelative} />
      </div>
      <div className={style.btn_submit}>
        <button className="btn btn-success px-4 fs-5" type="submit">
          {loadingSubmit && (
            <div className="spinner-border" role="status">
              <span className="visually-hidden text-center">Loading...</span>
            </div>
          )}
          {!loadingSubmit && "Lưu"}
        </button>
      </div>
    </Form>
  );
}
export default MilitaryConfig;
