import { Form } from "react-router-dom";
import styles from "./ConfigurationPage.module.css";

function ConfigurationPage() {
  return (
    <Form className={styles.formConfi}>
      <h2>Cấu hình chức vụ</h2>
      <div className={styles.input}>
        <label htmlFor="type">Đối tượng</label>
        <select id="type" name="type" required="true">
          <option value="officer">Sĩ quan</option>
          <option value="pro">Quân nhân chuyên nghiệp</option>
          <option value="soldier">Chiến Sĩ</option>
        </select>
      </div>
      <div className={styles.input}>
        <label htmlFor="nameType">Chức vụ</label>
        <input type="text" name="nameType" placeholder="Trung đội trưởng" />
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
