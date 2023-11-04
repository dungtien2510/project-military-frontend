import { Form } from "react-router-dom";

import style from "./FormEquip.module.css";
import { useState } from "react";
function FormEquip(props) {
  const { clickFilterHandler } = props;

  //state trường đối tượng
  const [valueObject, setValueObject] = useState("officer");

  // thay đổi trường đối tượng
  const changeObjectHandler = (e) => {
    setValueObject(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div style={{ marginTop: "7rem" }}>
      <Form method="POST" className={style.form} action={props.action}>
        <h2>{props.header}</h2>
        <div className={style.formInput}>
          <div className={style.item1}>
            <label htmlFor="id">ID</label>
            <input type="text" id="id" name="id" placeholder="Số seri" />
          </div>
          <div className={style.item2}>
            <label htmlFor="name">Tên</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Máy VTĐ VRU812"
            />
          </div>

          <div className={style.item3}>
            <label htmlFor="type">Loại</label>
            <select
              type="text"
              id="type"
              name="type"
              onChange={changeObjectHandler}
              value={valueObject}
            >
              <option value="weapon">Vũ khí</option>
              <option value="equip"> Trang bị, Khí tài</option>
            </select>
          </div>
          <div className={style.item19}>
            <label htmlFor="typeWeapon">Loại vũ khí</label>
            <select id="typeWeapon" name="typeWeapon">
              <option value="infantry">Vũ khí bộ binh</option>
              <option value="air">Vũ khí không quân</option>
              <option value="defense">Vũ khí phòng không</option>
              <option value="navy">Vũ khí hải quân</option>
            </select>
          </div>
          <div className={style.item4}>
            <label htmlFor="nameType">kiểu loại</label>

            {valueObject === "officer" && (
              <select type="text" id="nameType" name="nameType">
                <option value="1/">Súng</option>
                <option value="2/">Trung úy</option>
                <option value="3/">Thượng úy</option>
                <option value="4/">Đại úy</option>
                <option value="1//">Thiếu tá</option>
                <option value="2//">Trung tá</option>
                <option value="3//">Thượng tá</option>
                <option value="4//">Đại tá</option>
              </select>
            )}
            {valueObject === "pro" && (
              <select type="text" id="epaulette" name="epaulettet">
                <option value="1/">Thiếu úy bậc 1</option>
                <option value="1/">Thiếu úy bậc 2</option>
                <option value="2/">Trung úy</option>
                <option value="3/">Thượng úy</option>
                <option value="4/">Đại úy</option>
                <option value="1//">Thiếu tá</option>
                <option value="2//">Trung tá</option>
                <option value="3//">Thượng tá</option>
                <option value="4//">Đại tá</option>
              </select>
            )}
            {valueObject === "soldier" && (
              <select type="text" id="epaulette" name="epaulettet">
                <option value="b1">Binh nhì</option>
                <option value="b2">Binh nhất</option>
                <option value="h1">Hạ sĩ</option>
                <option value="h2">Trung sĩ</option>
                <option value="h3">Thượng sĩ</option>
              </select>
            )}
          </div>

          <div className={style.item5}>
            <label htmlFor="quantity">Số lượng</label>
            <input type="number" id="quantity" name="quantity" min="1" />
          </div>
          <div className={style.item6}>
            <label htmlFor="yearMake">Tháng-năm sản xuât</label>
            <input type="month" id="yearMake" name="yearMake" />
          </div>

          <div className={style.item7}>
            <label htmlFor="yearUse">Số năm sử dụng</label>
            <input
              type="number"
              id="yearUse"
              name="yearUse"
              placeholder="1"
              min="1"
            />
          </div>
          <div className={style.item8}>
            <label htmlFor="date">Ngày cấp</label>
            <input type="date" id="date" name="date" />
          </div>
          <div className={style.item9}>
            <label htmlFor="level">Cấp</label>
            <input
              type="number"
              id="level"
              name="level"
              placeholder="nhập từ 1-5"
              min="1"
              max="5"
            />
          </div>
          <div className={style.item10}>
            <label htmlFor="admin">Đơn vị đảm nhiệm</label>
            <input type="text" id="admin" name="admin" />
          </div>
          <div className={style.item11}>
            <label htmlFor="location">Vị trí</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="Sở chỉ huy"
            />
          </div>
          <div className={style.item12}>
            <label htmlFor="state">Số lần sữa chữa</label>
            <input
              type="number"
              id="repairNunber"
              name="repairNunber"
              placeholder="0"
              min="0"
            />
          </div>

          <div className={style.item13}>
            <label htmlFor="state">Tình trạng</label>
            <select id="state" name="state">
              <option value="online">Đang hoạt động</option>
              <option value="offline">Không hoạt động</option>
              <option value="repair">Sửa chữa</option>

              <option value="fail">Hỏng</option>
            </select>
          </div>

          {!props.formFilter && (
            <div className={style.item18}>
              <label htmlFor="note">Ghi chú</label>
              <textarea
                type="text"
                id="note"
                name="note"
                placeholder="Ghi chú"
              ></textarea>
            </div>
          )}
        </div>
        <div className={style.button}>
          {props.formFilter && (
            <button
              type="button"
              className={style.btnBack}
              onClick={clickFilterHandler}
            >
              Back
            </button>
          )}
          <button type="button" className={style.btnReset}>
            Reset
          </button>
          <button type="submit" className={style.btnSubmit}>
            {props.button}
          </button>
        </div>
      </Form>
    </div>
  );
}
export default FormEquip;
