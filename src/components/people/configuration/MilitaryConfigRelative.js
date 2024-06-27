import { useEffect, useState } from "react";
import style from "./MilitaryConfigRelative.module.css";
import InputSuggestion from "../../inputSugges/InputSuggestion";
import Table from "react-bootstrap/Table";
function MilitaryConfigRelative({ setRelative }) {
  const [valueRelative, setValueRelative] = useState("");
  const [valueRelativeRole, setRelativeRole] = useState("");
  const [valueDataRelative, setValueDataRelative] = useState([]);
  const [selectedIdRelative, setSelectedIdRelative] = useState("");
  const [dataChange, setDataChange] = useState(false);
  const changeValueRoleHandler = (e) => {
    setRelativeRole(e.target.value);
  };
  const setOptionRelative = (value) => {
    const date = new Date(value.birthday);
    const d = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    return `${value.name} (${d})`;
  };
  const setRelativeId = (data, value) => {
    if (!value) {
      setSelectedIdRelative("");
      setValueRelative("");
    }

    const selected = data.find((v) => {
      const date = new Date(v.birthday);
      const d = `${date.getDate()}/${
        date.getMonth() + 1
      }/${date.getFullYear()}`;

      return value.includes(v.name) && value.includes(d);
    });
    if (selected) {
      setSelectedIdRelative(selected._id);
      setValueRelative(selected);
    }
  };
  const chooseRelativeHandler = (e) => {
    e.preventDefault();
    setValueDataRelative((prev) => [
      ...prev,
      {
        _id: valueRelative._id,
        name: valueRelative.name,
        role: valueRelativeRole,
      },
    ]);
    setDataChange(!dataChange);
    setRelativeRole("");
  };
  console.log(valueDataRelative);
  const deleteRelative = (e) => {
    const idData = e.target.getAttribute("data");
    setValueDataRelative((prev) => {
      const result = prev.filter((v) => v._id !== idData);
      return result;
    });
    setDataChange(!dataChange);
  };

  console.log(valueDataRelative);
  const getRole = (role) => {
    switch (role) {
      case "father":
        return "Bố đẻ";
      case "mother":
        return "Mẹ đẻ";
      case "father_wife":
        return "Bố vợ";
      case "mother_wife":
        return "Mẹ vợ";
      case "wife":
        return "Vợ";

      case "children":
        return "Con";
    }
  };
  useEffect(() => {
    setRelative(valueDataRelative);
  }, [dataChange]);
  return (
    <div className={style.info_Relative}>
      <h5>Thông tin gia đình</h5>
      <ul className="mx-auto">
        <li>
          <InputSuggestion
            id="relative"
            label="Họ tên người thân"
            setId={setRelativeId}
            setOption={setOptionRelative}
            http="http://localhost:5000/client/relative/listName?name="
          />
        </li>
        <li>
          <div>
            <label>Vai trò</label>
            <select
              className="form-select"
              style={{ height: "58%" }}
              aria-label="Default select example"
              value={valueRelativeRole}
              onChange={changeValueRoleHandler}
            >
              <option value="">Vai trò</option>
              <option value="father">Bố đẻ</option>
              <option value="mother">Mẹ đẻ</option>
              <option value="wife">Vợ</option>
              <option value="father_wife">Bó vợ</option>
              <option value="mother_wife">Mẹ vợ</option>
              <option value="children">Con</option>
            </select>
          </div>
        </li>
        <li className={style.btn_reward}>
          <div className="text-end">
            <button
              className="btn btn-primary btn-sm px-3"
              onClick={chooseRelativeHandler}
            >
              Chọn
            </button>
          </div>
        </li>
        {valueDataRelative.length > 0 && (
          <li className={style.choose_reward}>
            <div>
              <h6>Người thân được chọn:</h6>
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
                    <td>Họ tên người thân</td>
                    <td>Vai trò</td>

                    <td>Xóa</td>
                  </tr>
                </thead>
                <tbody>
                  {valueDataRelative.map((v, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{v.name}</td>
                      <td>{getRole(v.role)}</td>
                      <td className="text-center">
                        <button
                          type="button"
                          className={style.btn_delete}
                          data={v._id}
                          onClick={deleteRelative}
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
    </div>
  );
}
export default MilitaryConfigRelative;
