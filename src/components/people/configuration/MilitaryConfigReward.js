import { useEffect, useState } from "react";
import style from "./MilitaryConfigReward.module.css";
import InputSuggestion from "../../inputSugges/InputSuggestion";
import Table from "react-bootstrap/Table";
function MilitaryConfigReward({ setReward }) {
  const [valueDateReward, setValueDateReward] = useState("");
  const [valueNoteReward, setValueNoteReward] = useState("");
  const [valueReward, setValueReward] = useState("");
  const [valueDataReward, setValueDataReward] = useState([]);
  const [selectedIdReward, setSelectedIdReward] = useState("");
  const [dataChange, setDataChange] = useState(false);
  const changeNoteRewardHandler = (e) => {
    setValueNoteReward(e.target.value);
  };
  const changeDateRewardHandler = (e) => {
    setValueDateReward(e.target.value);
  };
  const setRewardId = (data, value) => {
    if (!value) {
      setSelectedIdReward("");
      setValueReward("");
    }
    const selected = data.find((v) => v.name === value);
    if (selected) {
      setSelectedIdReward(selected._id);
      setValueReward(selected);
    }
  };
  const chooseRewardHandler = (e) => {
    e.preventDefault();
    setValueDataReward((prev) => [
      ...prev,
      {
        _id: valueReward._id,
        name: valueReward.name,
        type: valueReward.type,
        level: valueReward.level,
        year: valueDateReward,
        note: valueNoteReward,
      },
    ]);
    setDataChange(!dataChange);
    setValueDateReward("");
    setValueNoteReward("");
  };
  console.log(valueDataReward);
  const deleteReward = (e) => {
    const idData = e.target.getAttribute("data");
    setValueDataReward((prev) => {
      const result = prev.filter((v) => v._id !== idData);
      return result;
    });
    setDataChange(!dataChange);
  };

  const setOption = (value) => {
    return value.name;
  };
  const getYear = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    return year;
  };
  useEffect(() => {
    setReward(valueDataReward);
  }, [dataChange]);
  return (
    <form className={style.reward}>
      <h5>Khen thưởng, kỹ luật</h5>
      <ul>
        <li>
          <InputSuggestion
            id="reward"
            label="Tên khen thưởng, kỷ luật"
            setId={setRewardId}
            setOption={setOption}
            http="http://localhost:5000/client/reward/listName?name="
          />
        </li>
        <li>
          <div className="pb-1">
            <label>Năm khen thưởng, kỷ luật</label>
            <input
              type="date"
              className="form-control"
              value={valueDateReward}
              onChange={changeDateRewardHandler}
              autoComplete="off"
              required
            />
          </div>
        </li>
        <li>
          <div className="pb-1">
            <label>Lý do</label>
            <input
              type="text"
              className="form-control"
              value={valueNoteReward}
              onChange={changeNoteRewardHandler}
              autoComplete="off"
              required
            />
          </div>
        </li>
        <li className={style.btn_reward}>
          <div className="text-end">
            <button
              className="btn btn-primary btn-sm px-3"
              type="button"
              onClick={chooseRewardHandler}
            >
              Chọn
            </button>
          </div>
        </li>
        {valueDataReward.length > 0 && (
          <li className={style.choose_reward}>
            <div>
              <h6>Khen thưởng, kỷ luật được chọn:</h6>
              <Table
                striped
                bordered
                hover
                variant="light"
                className={`${style.table}`}
              >
                <thead className="fw-medium">
                  <tr>
                    <td>STT</td>
                    <td>Loại</td>
                    <td>Tên</td>
                    <td>Cấp độ</td>
                    <td>Năm nhận</td>
                    <td>Lý do</td>
                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {valueDataReward.map((v, i) => (
                    <tr key={v._id}>
                      <td>{i + 1}</td>
                      <td>{v.type === "reward" ? "Khen thưởng" : "Kỷ luật"}</td>
                      <td>{v.name}</td>
                      <td>{v.level}</td>
                      <td>{getYear(v.year)}</td>
                      <td>{v.note}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className={style.btn_delete}
                          onClick={deleteReward}
                          data={v._id}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </li>
        )}
      </ul>
    </form>
  );
}
export default MilitaryConfigReward;
