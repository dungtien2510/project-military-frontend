import { Form } from "react-router-dom";
import styles from "./ConfigurationPage.module.css";
import { useState } from "react";

function ConfigurationPage() {
  const [valueType, setValueType] = useState("weapon");

  // thay đổi loại
  const changeTypeHandler = (e) => {
    setValueType(e.target.value);
  };

  return (
    <Form className={styles.formConfi}>
      <h2>Cấu hình</h2>
      <div className={styles.input}>
        <label htmlFor="type">Loại</label>
        <select
          id="type"
          name="type"
          required="true"
          onChange={changeTypeHandler}
          value={valueType}
        >
          <option value="weapon">Vũ khí</option>
          <option value="equip">Trang bị khí tài</option>
        </select>
      </div>
      {valueType === "equip" && (
        <div className={styles.input}>
          <label htmlFor="type">Loại trang bị khí tài</label>
          <select id="type" name="type" required="true">
            <option value="information">Khí tài thông tin</option>
            <option value="airForce">Khí tài không quân</option>
            <option value="defense">Khí tài phòng không</option>
            <option value="navy">Khí tài hải quân</option>
            <option value="infantry">Khí tài bộ binh</option>
          </select>
        </div>
      )}
      {valueType === "weapon" && (
        <div className={styles.input}>
          <label htmlFor="type">Loại vũ khí</label>
          <select id="type" name="type" required="true">
            <option value="air">vũ khí không quân</option>
            <option value="defense">vũ khí phòng không</option>
            <option value="navy">vũ khí hải quân</option>
            <option value="infantry">vũ khí bộ binh</option>
          </select>
        </div>
      )}
      <div className={styles.input}>
        <label htmlFor="nameType">Tên kiểu loại</label>
        <input
          type="text"
          name="nameType"
          placeholder={
            valueType === "equip" ? "Máy vô tuyến điện sóng ngắn" : "Súng"
          }
        />
      </div>
      <div className={styles.divBtn}>
        <button type="submit" className={styles.btn}>
          Thêm
        </button>
      </div>
    </Form>
  );
}
export default ConfigurationPage;
